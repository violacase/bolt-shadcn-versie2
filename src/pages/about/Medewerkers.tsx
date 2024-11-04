import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { EmployeeCard } from "@/components/team/EmployeeCard";
import { EmployeeDialog } from "@/components/team/EmployeeDialog";
import { fetchEmployees } from "@/lib/api/wordpress";
import type { Employee } from "@/types/team";

export function Medewerkers() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-4">
          <div className="h-8 bg-muted animate-pulse rounded" />
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-32 bg-muted animate-pulse rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Ons Team
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Maak Kennis Met Ons Team
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ontmoet de professionals die ons bedrijf maken tot wat het is.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {employees.map((employee) => (
          <EmployeeCard
            key={employee.name}
            employee={employee}
            onClick={setSelectedEmployee}
          />
        ))}
      </div>

      <EmployeeDialog
        employee={selectedEmployee}
        onClose={() => setSelectedEmployee(null)}
      />
    </div>
  );
}