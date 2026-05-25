import db from "../config/db.js";

export const getAllProducts = (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(data);
  });
};
