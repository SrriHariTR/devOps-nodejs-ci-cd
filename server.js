const express = require("express");

const app = express();
const PORT = 3000;

app.get("/status", (req, res) => {
  res.json({
    status: "Application is running",
  });
});

app.get("/status", (req, res) => {
    res.json({
        status: "Application updated successfully"
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
