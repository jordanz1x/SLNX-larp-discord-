const express = require("express");
const path = require("path");

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname));

app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "discord.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
