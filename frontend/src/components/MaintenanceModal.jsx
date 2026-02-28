import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function MaintenanceModal({
  open,
  onClose,
  maintenance = [],
  equipmentId,
  onAddMaintenance,
}) {
  const [form, setForm] = useState({
    maintenance_date: "",
    performed_by: "",
    notes: "",
  });

  const handleAddMaintenance = async () => {
    if (!form.maintenance_date || !form.performed_by) {
      alert("Please fill required fields");
      return;
    }

    await onAddMaintenance(equipmentId, form);

    // Reset form
    setForm({
      maintenance_date: "",
      performed_by: "",
      notes: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="space-y-6">
        <DialogHeader>
          <DialogTitle>Maintenance History</DialogTitle>
        </DialogHeader>

        {/* Maintenance List */}
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {maintenance.length === 0 ? (
            <p className="text-gray-500">
              No maintenance records found.
            </p>
          ) : (
            maintenance.map((log) => (
              <div
                key={log.id}
                className="border p-3 rounded-md bg-gray-50"
              >
                <p>
                  <strong>Date:</strong> {log.maintenance_date}
                </p>
                <p>
                  <strong>Performed By:</strong> {log.performed_by}
                </p>
                <p>
                  <strong>Notes:</strong> {log.notes}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Add Maintenance Form */}
        <div className="space-y-2 border-t pt-4">
          <h3 className="font-semibold">Add Maintenance</h3>

          <Input
            type="date"
            value={form.maintenance_date}
            onChange={(e) =>
              setForm({
                ...form,
                maintenance_date: e.target.value,
              })
            }
          />

          <Input
            placeholder="Performed By"
            value={form.performed_by}
            onChange={(e) =>
              setForm({
                ...form,
                performed_by: e.target.value,
              })
            }
          />

          <Input
            placeholder="Notes"
            value={form.notes}
            onChange={(e) =>
              setForm({
                ...form,
                notes: e.target.value,
              })
            }
          />

          <Button onClick={handleAddMaintenance}>
            Add Maintenance
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}