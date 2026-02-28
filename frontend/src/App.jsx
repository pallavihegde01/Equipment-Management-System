import { useEffect, useState } from "react";
import EquipmentTable from "./components/EquipmentTable";
import EquipmentForm from "./components/EquipmentForm";
import MaintenanceModal from "./components/MaintenanceModal";
import {
  getEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
  getMaintenance,
  addMaintenance,
  getTypes,
} from "./services/api";

export default function App() {
  const [equipment, setEquipment] = useState([]);
  const [editing, setEditing] = useState(null);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [maintenanceOpen, setMaintenanceOpen] = useState(false);
  const [maintenanceData, setMaintenanceData] = useState([]);
  const [types, setTypes] = useState([]);
  const loadData = async () => {
    const data = await getEquipment();
    setEquipment(data);
  };

  const loadTypes = async () => {
    const data = await getTypes();
    setTypes(data);
  };

  useEffect(() => {
    loadData();
    loadTypes();
  }, []);

  const handleSubmit = async (form) => {
    const formattedData = {
      ...form,
      type_id: Number(form.type_id),
    };

    if (editing) {
      await updateEquipment(editing.id, formattedData);
    } else {
      await createEquipment(formattedData);
    }

    setEditing(null);
    loadData();
  };

  const handleViewMaintenance = async (item) => {
    const data = await getMaintenance(item.id);
    setMaintenanceData(data);
    setSelectedEquipment(item);
    setMaintenanceOpen(true);
  };
  const handleAddMaintenance = async (equipmentId, form) => {
    await addMaintenance(equipmentId, form);

    // Refresh maintenance list
    const updated = await getMaintenance(equipmentId);
    setMaintenanceData(updated);
  };

  return (
    <div className="p-6 space-y-6">
      <EquipmentForm
        initialData={editing}
        onSubmit={handleSubmit}
        types={types}
      />

      <EquipmentTable
        equipment={equipment}
        onEdit={setEditing}
        onDelete={async (id) => {
          await deleteEquipment(id);
          loadData();
        }}
        onViewMaintenance={handleViewMaintenance}
      />

      <MaintenanceModal
        open={maintenanceOpen}
        onClose={() => setMaintenanceOpen(false)}
        maintenance={maintenanceData}
        equipmentId={selectedEquipment?.id}
        onAddMaintenance={handleAddMaintenance}
      />
    </div>
  );
}
