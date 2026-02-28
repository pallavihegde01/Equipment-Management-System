const express = require("express");
const router = express.Router();
const service = require("../services/maintenance.service");

// POST /api/equipment/:id/maintenance
router.post("/equipment/:id/maintenance", async (req, res, next) => {
  try {
    const data = {
      ...req.body,
      equipment_id: req.params.id,
    };

    const result = await service.addMaintenance(data);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

// GET /api/equipment/:id/maintenance
router.get("/equipment/:id/maintenance", async (req, res, next) => {
  try {
    const result = await service.getMaintenanceHistory(req.params.id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
