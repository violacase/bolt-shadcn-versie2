import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import type { Employee } from "@/types/team";

interface EmployeeCardProps {
  employee: Employee;
  onClick: (employee: Employee) => void;
}

export function EmployeeCard({ employee, onClick }: EmployeeCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(employee)}
    >
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={employee.image} alt={employee.name} />
            <AvatarFallback>{employee.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h3 className="font-semibold">{employee.name}</h3>
            <p className="text-sm text-muted-foreground">{employee.role}</p>
            <div className="flex gap-2">
              {employee.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {employee.location}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}