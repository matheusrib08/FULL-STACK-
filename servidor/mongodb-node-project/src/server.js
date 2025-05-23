const express = require('express');
const { connectToDatabase } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to the database:', err);
  });