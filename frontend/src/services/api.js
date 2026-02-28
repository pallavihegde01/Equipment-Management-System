const BASE_URL = "http://localhost:5000/api";

export const getEquipment = async () => {
  const res = await fetch(`${BASE_URL}/equipment`);
  return res.json();
};

export const createEquipment = async (data) => {
  const res = await fetch(`${BASE_URL}/equipment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateEquipment = async (id, data) => {
  const res = await fetch(`${BASE_URL}/equipment/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteEquipment = async (id) => {
  await fetch(`${BASE_URL}/equipment/${id}`, {
    method: "DELETE",
  });
};

export const getMaintenance = async (equipmentId) => {
  const res = await fetch(`${BASE_URL}/equipment/${equipmentId}/maintenance`);
  return res.json();
};

export const addMaintenance = async (equipmentId, data) => {
  const res = await fetch(
    `http://localhost:5000/api/equipment/${equipmentId}/maintenance`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    },
  );
  return res.json();
};

export const getTypes = async () => {
  const res = await fetch(`${BASE_URL}/types`);
  return res.json();
};
