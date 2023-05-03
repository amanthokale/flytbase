const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const port = process.env.PORT || 3001;
// const http = require("http").createServer(app);

app.use(bodyParser.json({ limit: "200mb" }));

require("./src/Routes")(app);

const jsn = { status: "Server is live" };
app.get("/*", (request, response) => {
  response.send(jsn);
});

app.listen(port, () => {
  console.log("listening on port ", port);
});
