const { Client } = require("pg");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const client = new Client({
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: "cleanclients",
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
