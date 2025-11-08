const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.json({ message: 'Users service is running!' });
});

app.listen(PORT, () => {
  console.log(`Users service listening on port ${PORT}`);
});
