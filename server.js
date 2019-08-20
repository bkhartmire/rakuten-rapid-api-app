const express = require("express");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`);
});
