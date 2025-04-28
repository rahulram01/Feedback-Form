const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");

const app = express();
const port = 5000;

app.use(bodyParser.json()); // To parse incoming JSON requests

// PostgreSQL Client setup
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "feed",
  password: "rahul0807",
  port: 5432,
});

client.connect();

// POST route to submit feedback
app.post("/submit-feedback", async (req, res) => {
  const { name, email, phone, checkbox_values } = req.body;

  const query = `
    INSERT INTO feedback (name, email, phone, checkbox_values) 
    VALUES ($1, $2, $3, $4)
  `;

  try {
    await client.query(query, [name, email, phone, checkbox_values]);
    res.status(200).send("Feedback submitted successfully");
  } catch (err) {
    console.error("Error inserting feedback:", err);
    res.status(500).send("Error submitting feedback");
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
