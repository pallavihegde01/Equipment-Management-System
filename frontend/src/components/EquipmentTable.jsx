import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

export default function EquipmentTable({
  equipment,
  onEdit,
  onDelete,
  onViewMaintenance,
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Cleaned</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {equipment.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type_name}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.last_cleaned_date}</TableCell>
            <TableCell className="space-x-2">
              <Button onClick={() => onEdit(item)}>Edit</Button>
              <Button variant="destructive" onClick={() => onDelete(item.id)}>
                Delete
              </Button>
              <Button variant="outline" onClick={() => onViewMaintenance(item)}>
                Maintenance
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
