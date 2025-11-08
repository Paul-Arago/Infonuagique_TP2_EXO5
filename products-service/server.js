const express = require('express');
const app = express();
const PORT = 3002;

app.get('/', (req, res) => {
  res.json({ message: 'Products service is running!' });
});

app.listen(PORT, () => {
  console.log(`Products service listening on port ${PORT}`);
});
