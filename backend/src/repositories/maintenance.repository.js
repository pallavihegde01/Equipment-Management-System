const pool = require("../db");

exports.insertMaintenance = async (client, data) => {
  const result = await client.query(
    `INSERT INTO maintenance_logs 
     (equipment_id, maintenance_date, notes, performed_by)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [data.equipment_id, data.maintenance_date, data.notes, data.performed_by],
  );

  return result.rows[0];
};

// Update equipment after maintenance
exports.updateEquipmentAfterMaintenance = async (
  client,
  equipment_id,
  maintenance_date,
) => {
  await client.query(
    `UPDATE equipment
     SET status = 'Active',
         last_cleaned_date = $1
     WHERE id = $2`,
    [maintenance_date, equipment_id],
  );
};

// Get maintenance history
exports.getByEquipmentId = async (equipment_id) => {
  const result = await pool.query(
    `SELECT * FROM maintenance_logs
     WHERE equipment_id = $1
     ORDER BY maintenance_date DESC`,
    [equipment_id],
  );

  return result.rows;
};
