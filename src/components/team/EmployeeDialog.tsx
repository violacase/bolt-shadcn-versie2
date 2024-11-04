import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import type { Employee } from "@/types/team";

interface EmployeeDialogProps {
  employee: Employee | null;
  onClose: () => void;
}

export function EmployeeDialog({ employee, onClose }: EmployeeDialogProps) {
  if (!employee) return null;

  return (
    <Dialog open={!!employee} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={employee.image} alt={employee.name} />
              <AvatarFallback>{employee.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              {employee.name}
              <p className="text-sm font-normal text-muted-foreground">{employee.role}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Contact Information</h4>
              <div className="grid gap-2">
                <a 
                  href={`mailto:${employee.details?.email}`}
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {employee.details?.email}
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {employee.details?.phone}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Department Information</h4>
              <div className="grid gap-2 text-sm">
                <p>Department: {employee.details?.department}</p>
                <p>Join Date: {employee.details?.joinDate}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Current Projects</h4>
              <ul className="list-disc list-inside space-y-1">
                {employee.details?.projects.map((project) => (
                  <li key={project}>{project}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {employee.details?.expertise.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href={employee.details?.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={employee.details?.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}