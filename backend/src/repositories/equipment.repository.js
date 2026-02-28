const pool = require("../db");

// GET ALL EQUIPMENT
exports.findAll = async () => {
  const result = await pool.query(
    `SELECT e.*, t.name AS type_name
     FROM equipment e
     JOIN equipment_types t ON e.type_id = t.id
     ORDER BY e.id`,
  );
  return result.rows;
};

exports.findById = async (id) => {
  const result = await pool.query(`SELECT * FROM equipment WHERE id=$1`, [id]);
  return result.rows[0];
};
// CREATE EQUIPMENT
exports.create = async (data) => {
  const { name, type_id, status } = data;

  const result = await pool.query(
    `INSERT INTO equipment (name, type_id, status)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [name, type_id, status],
  );

  return result.rows[0];
};

// UPDATE EQUIPMENT
exports.update = async (id, data) => {
  const allowedFields = ["name", "type_id", "status", "last_cleaned_date"];

  const fields = [];
  const values = [];
  let index = 1;

  for (let key in data) {
    if (allowedFields.includes(key)) {
      fields.push(`${key} = $${index}`);
      values.push(data[key]);
      index++;
    }
  }

  if (fields.length === 0) return null;

  const query = `
    UPDATE equipment
    SET ${fields.join(", ")}
    WHERE id = $${index}
    RETURNING *;
  `;

  values.push(id);

  const result = await pool.query(query, values);
  return result.rows[0];
};
// DELETE EQUIPMENT
exports.remove = async (id) => {
  await pool.query(`DELETE FROM equipment WHERE id=$1`, [id]);
};
