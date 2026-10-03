const express = require("express");
const cors = require("cors");

const codeRoutes = require("./routes/codeRoutes");

const app = express();


// Middleware
app.use(cors());

app.use(express.json());


// Test route
app.get("/", (req, res) => {

    res.json({
        message: "SkillForge server is running"
    });

});


// Coding routes
app.use("/api/code", codeRoutes);


// Start server
const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `SkillForge server running on http://localhost:${PORT}`
    );

});