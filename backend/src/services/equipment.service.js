const repo = require("../repositories/equipment.repository");

// GET ALL
exports.getAllEquipment = async () => {
  return await repo.findAll();
};

// CREATE
exports.createEquipment = async (data) => {
  return await repo.create(data);
};

exports.updateEquipment = async (id, data) => {
  if (data.status === "Active") {
    const existing = await repo.findById(id);

    if (!existing) {
      const error = new Error("Equipment not found");
      error.statusCode = 404;
      throw error;
    }

    const lastCleaned = new Date(existing.last_cleaned_date);
    const today = new Date();

    const diffDays = (today - lastCleaned) / (1000 * 60 * 60 * 24);

    if (diffDays > 30) {
      const error = new Error(
        "Equipment cannot be marked Active because it has not been cleaned in the last 30 days.",
      );
      error.statusCode = 400;
      throw error;
    }
  }

  return await repo.update(id, data);
};

// DELETE
exports.deleteEquipment = async (id) => {
  return await repo.remove(id);
};
