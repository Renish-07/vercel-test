
const express = require('express');
const app = express();

// Middleware to parse JSON request body
app.use(express.json());

app.post('/validate', (req, res) => {
  const validationToken = req.query.validationToken;
  console.log(validationToken);
  res.send(validationToken).status(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
