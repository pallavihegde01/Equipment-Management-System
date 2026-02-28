import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EquipmentForm({ initialData, onSubmit, types }) {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      type_id: "",
      status: "Inactive",
      last_cleaned_date: "",
    },
  );

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <Input
        placeholder="Equipment Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        className="border p-2 rounded w-full"
        value={form.type_id}
        onChange={(e) => setForm({ ...form, type_id: e.target.value })}
      >
        <option value="">Select Type</option>
        {types.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name}
          </option>
        ))}
      </select>

      <select
        className="border p-2 rounded w-full"
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
        <option value="Under Maintenance">Under Maintenance</option>
      </select>

      <Input
        type="date"
        value={form.last_cleaned_date}
        onChange={(e) =>
          setForm({
            ...form,
            last_cleaned_date: e.target.value,
          })
        }
      />

      <Button type="submit">{initialData ? "Update" : "Create"}</Button>
    </form>
  );
}
