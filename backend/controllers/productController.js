const pool = require('../db');

exports.getAllProducts = async (req, res) => {
  try {
    const { q, category } = req.query; // optional search
    let sql = 'SELECT * FROM products';
    const params = [];
    const where = [];
    if (q) { where.push('name LIKE ?'); params.push(`%${q}%`); }
    if (category) { where.push('category = ?'); params.push(category); }
    if (where.length) sql += ' WHERE ' + where.join(' AND ');
    const [rows] = await pool.query(sql, params);
    res.json(rows);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getProductById = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (!rows.length) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, image_url, description } = req.body;
    const [result] = await pool.query(
      'INSERT INTO products (name, price, category, image_url, description) VALUES (?, ?, ?, ?, ?)',
      [name, price, category, image_url, description]
    );
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.updateProduct = async (req, res) => {
  try {
    const { name, price, category, image_url, description } = req.body;
    await pool.query(
      'UPDATE products SET name=?, price=?, category=?, image_url=?, description=? WHERE id=?',
      [name, price, category, image_url, description, req.params.id]
    );
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
  } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.deleteProduct = async (req, res) => {
  try {
    await pool.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.json({ message: 'Deleted' });
  } catch (err) { res.status(500).json({ error: err.message }); }
};
