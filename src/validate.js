// Minimal request validation middleware
const requireFields = (fields) => (req, res, next) => {
  const missing = fields.filter((f) => req.body[f] === undefined);
  if (missing.length) {
    return res.status(400).json({ error: { message: `Missing: ${missing.join(", ")}` } });
  }
  next();
};
module.exports = { requireFields };
