const express = require('express');
const app = express();
const PORT = 3001;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.get("/", (req, res) => {
  res.json("User Service is running");
});

app.listen(PORT, () => {
  console.log(`Users service listening on port ${PORT}`);
});
