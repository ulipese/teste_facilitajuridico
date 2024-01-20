const express = require("express");
const cors = require("cors");
const app = express();

const router = require("./routes");

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log(`The server is running at localhost:3000`);
});
