const pool = require("../db");
const repo = require("../repositories/maintenance.repository");

exports.addMaintenance = async (data) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const maintenance = await repo.insertMaintenance(client, data);

    // BUSINESS RULE
    await repo.updateEquipmentAfterMaintenance(
      client,
      data.equipment_id,
      data.maintenance_date
    );

    await client.query("COMMIT");

    return maintenance;

  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
};

exports.getMaintenanceHistory = async (equipment_id) => {
  return await repo.getByEquipmentId(equipment_id);
};