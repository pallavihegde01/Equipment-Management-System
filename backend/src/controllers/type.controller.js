const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET /api/types
router.get("/", async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT * FROM equipment_types ORDER BY name"
    );
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;