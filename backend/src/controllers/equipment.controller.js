const express = require("express");
const router = express.Router();
const service = require("../services/equipment.service");

// GET /api/equipment
router.get("/", async (req, res, next) => {
  try {
    const data = await service.getAllEquipment();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
});

// POST /api/equipment
router.post("/", async (req, res, next) => {
  try {
    const newEquipment = await service.createEquipment(req.body);
    res.status(201).json(newEquipment);
  } catch (err) {
    next(err);
  }
});

// PUT /api/equipment/:id
router.put("/:id", async (req, res, next) => {
  try {
    const updated = await service.updateEquipment(req.params.id, req.body);
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/equipment/:id
router.delete("/:id", async (req, res, next) => {
  try {
    await service.deleteEquipment(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
