const questions = require("../data/question");
const { judgeCode } = require("../services/judgeService");


// =====================================================
// GET FIRST QUESTION
// =====================================================

const getQuestions = (req, res) => {

    try {

        const { topic } = req.params;

        const topicQuestions = questions[topic];

        if (!topicQuestions) {

            return res.status(404).json({
                message: "Topic not found",
            });

        }

        if (topicQuestions.length === 0) {

            return res.status(404).json({
                message: "No questions available for this topic",
            });

        }

        res.json({
            question: topicQuestions[0],
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Unable to load question",
        });

    }
};


// =====================================================
// SUBMIT CODE
// =====================================================

const submitCode = async (req, res) => {

    try {

        const {
            topic,
            questionId,
            language,
            code,
        } = req.body;


        // -----------------------------
        // VALIDATION
        // -----------------------------

        if (
            !topic ||
            !questionId ||
            !language ||
            !code
        ) {

            return res.status(400).json({
                message: "Missing required fields",
            });

        }


        // -----------------------------
        // FIND TOPIC
        // -----------------------------

        const topicQuestions = questions[topic];

        if (!topicQuestions) {

            return res.status(404).json({
                message: "Topic not found",
            });

        }


        // -----------------------------
        // FIND QUESTION
        // -----------------------------

        const currentIndex =
            topicQuestions.findIndex(
                q => q.id === Number(questionId)
            );


        if (currentIndex === -1) {

            return res.status(404).json({
                message: "Question not found",
            });

        }


        const question =
            topicQuestions[currentIndex];


        // -----------------------------
        // RUN CODE
        // -----------------------------

        const result = await judgeCode(
            language,
            code,
            question.testCases
        );


        // -----------------------------
        // CALCULATE SCORE
        // -----------------------------

        let score = result.score;

        if (score === undefined) {

            if (result.passed) {
                score = 100;
            } else {
                score = 0;
            }

        }


        // -----------------------------
        // CHOOSE NEXT QUESTION
        // -----------------------------

        let nextQuestion = null;


        if (currentIndex < topicQuestions.length - 1) {

            /*
             * We don't show "Beginner / Intermediate / Hard"
             * to the user.
             *
             * Internally:
             *
             * Low score
             * → next question stays close to current concept
             *
             * Medium score
             * → move normally
             *
             * High score
             * → move slightly ahead
             */

            if (score < 50) {

                // Give the immediate next question
                nextQuestion =
                    topicQuestions[currentIndex + 1];

            } else if (score < 80) {

                // Normal progression
                nextQuestion =
                    topicQuestions[currentIndex + 1];

            } else {

                // Good performance:
                // move ahead if another question exists

                if (
                    currentIndex + 2 <
                    topicQuestions.length
                ) {

                    nextQuestion =
                        topicQuestions[currentIndex + 2];

                } else {

                    nextQuestion =
                        topicQuestions[currentIndex + 1];

                }

            }

        }


        // -----------------------------
        // RESPONSE
        // -----------------------------

        res.json({

            success: true,

            questionId: question.id,

            title: question.title,

            passed: result.passed,

            score: score,

            message:
                result.message ||
                (
                    result.passed
                        ? "All test cases passed!"
                        : "Some test cases failed."
                ),

            testResults:
                result.testResults || null,

            nextQuestion: nextQuestion,

        });


    } catch (error) {

        console.error(
            "Code submission error:",
            error
        );

        res.status(500).json({

            success: false,

            message:
                "Code execution failed",

        });

    }
};


module.exports = {
    getQuestions,
    submitCode,
};