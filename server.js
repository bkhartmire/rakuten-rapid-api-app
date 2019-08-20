const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const { getBirthdayData, getHeadlines } = require("./utils/api.js");

require("dotenv").config();

const app = express();
// parse request bodies as json
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));
// setup logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// serve static assets
app.use(express.static(path.resolve(__dirname, "dist")));

// endpoints
app.get("/birthday/:year/:month/:day", async (req, res) => {
  try {
    const result = await getBirthdayData(
      req.params.year,
      req.params.month,
      req.params.day
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

app.get("/headlines/:year/:month/:day", async (req, res) => {
  try {
    const result = await getHeadlines(
      req.params.year,
      req.params.month,
      req.params.day
    );
    res.send(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});
