import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Globe } from "lucide-react";
import type { TeamMember } from "@/types/team";

interface MemberDialogProps {
  member: TeamMember | null;
  onClose: () => void;
}

export function MemberDialog({ member, onClose }: MemberDialogProps) {
  if (!member) return null;

  return (
    <Dialog open={!!member} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={member.image} alt={member.name} />
              <AvatarFallback>{member.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              {member.name}
              <p className="text-sm font-normal text-muted-foreground">{member.role}</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="grid gap-2">
              <a 
                href={`mailto:${member.details?.email}`}
                className="flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {member.details?.email}
              </a>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {member.details?.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {member.details?.location}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Key Projects</h4>
            <ul className="list-disc list-inside space-y-1">
              {member.details?.projects.map((project) => (
                <li key={project}>{project}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Achievements</h4>
            <ul className="list-disc list-inside space-y-1">
              {member.details?.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a href={member.details?.social.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={member.details?.social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={member.details?.social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href={member.details?.social.website} target="_blank" rel="noopener noreferrer">
                <Globe className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}