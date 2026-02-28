const express = require("express");
const cors = require("cors");
require("dotenv").config();

const equipmentRoutes = require("./controllers/equipment.controller");
const maintenanceRoutes = require("./controllers/maintenance.controller");
const typeRoutes = require("./controllers/type.controller");
const { errorHandler } = require("./middleware/error.middleware");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/equipment", equipmentRoutes);

app.use("/api/maintenance", maintenanceRoutes);
app.use("/api", maintenanceRoutes); 

app.use("/api/types", typeRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});