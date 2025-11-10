const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3002;
const ORDERS = [{id:1, product: "Product1"}, {id:2, product: "Product2"}];

// URL du user-service pour Kubernetes local
const USERS_SERVICE_URL = "http://users-service";

app.post("/orders", async (req, res) => {
  const { userId, product } = req.body;
  try {
    const userRes = await fetch(`${USERS_SERVICE_URL}/users/${userId}`);
    if (!userRes.ok) return res.status(404).json({ error: "User not found" });
    const order = { id: Date.now(), userId, product };
    ORDERS.push(order);
    res.json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal error" });
  }
});

app.get("/orders", (req, res) => {
  res.json(ORDERS);
});

app.get("/", (req, res) => {
  res.json("Product Service is running");
});

app.listen(PORT, () => {
  console.log(`Products service listening on port ${PORT}`);
});
