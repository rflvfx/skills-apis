const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => res.json({ status: "ok" }));
router.get("/items", (req, res) => res.json(store.items));
router.post("/items", (req, res) => {
  store.items.push(req.body);
  res.status(201).json(req.body);
});

module.exports = router;
