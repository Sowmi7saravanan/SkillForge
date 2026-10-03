const express = require("express");

const {
    getQuestions,
    submitCode
} = require("../controllers/codeController");

const router = express.Router();


// Get first question for selected topic
// Example:
// /api/code/question/Arrays
router.get(
    "/question/:topic",
    getQuestions
);


// Submit user's solution
router.post(
    "/submit",
    submitCode
);


module.exports = router;