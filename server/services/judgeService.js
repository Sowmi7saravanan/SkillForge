const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const os = require("os");

function runCode(language, code, input) {
  return new Promise((resolve, reject) => {

    const tempDir = fs.mkdtempSync(
      path.join(os.tmpdir(), "skillforge-")
    );

    let fileName;
    let command;

    if (language === "python") {

      fileName = "main.py";

      fs.writeFileSync(
        path.join(tempDir, fileName),
        code
      );

      command = `python "${path.join(tempDir, fileName)}"`;

    } else if (language === "cpp") {

      fileName = "main.cpp";

      const sourcePath = path.join(tempDir, fileName);
      const exePath = path.join(tempDir, "main.exe");

      fs.writeFileSync(sourcePath, code);

      command = `g++ "${sourcePath}" -o "${exePath}" && "${exePath}"`;

    } else if (language === "c") {

      fileName = "main.c";

      const sourcePath = path.join(tempDir, fileName);
      const exePath = path.join(tempDir, "main.exe");

      fs.writeFileSync(sourcePath, code);

      command = `gcc "${sourcePath}" -o "${exePath}" && "${exePath}"`;

    } else if (language === "java") {

      fileName = "Main.java";

      const sourcePath = path.join(tempDir, fileName);

      fs.writeFileSync(sourcePath, code);

      command = `javac "${sourcePath}" && java -cp "${tempDir}" Main`;

    } else {

      return reject(
        new Error("Unsupported programming language")
      );
    }

    const process = exec(
      command,
      {
        timeout: 5000,
      },
      (error, stdout, stderr) => {

        try {
          fs.rmSync(tempDir, {
            recursive: true,
            force: true,
          });
        } catch {}

        if (error) {
          resolve({
            success: false,
            output: stderr || error.message,
          });

          return;
        }

        resolve({
          success: true,
          output: stdout.trim(),
        });
      }
    );

    process.stdin.write(input);
    process.stdin.end();
  });
}


async function judgeCode(language, code, testCases) {

  let passed = 0;
  const results = [];

  for (const testCase of testCases) {

    const result = await runCode(
      language,
      code,
      testCase.input
    );

    const actual = result.output.trim();
    const expected = testCase.output.trim();

    const isPassed =
      result.success &&
      actual === expected;

    if (isPassed) {
      passed++;
    }

    results.push({
      input: testCase.input,
      expected,
      actual,
      passed: isPassed,
    });
  }

  const total = testCases.length;

  const score =
    total === 0
      ? 0
      : Math.round((passed / total) * 100);

  return {
    passed,
    total,
    score,
    results,
  };
}

module.exports = {
  judgeCode,
};