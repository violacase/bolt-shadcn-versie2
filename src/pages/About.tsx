import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, MapPin, Phone } from "lucide-react";
import { MemberCard } from "@/components/team/MemberCard";
import { EmployeeCard } from "@/components/team/EmployeeCard";
import { MemberDialog } from "@/components/team/MemberDialog";
import { EmployeeDialog } from "@/components/team/EmployeeDialog";
import { ContactMap } from "@/components/maps/ContactMap";
import { fetchTeamMembers } from "@/lib/api/wordpress";
import type { TeamMember } from "@/types/team";

export function About() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const members = await fetchTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error('Failed to fetch team data:', error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          About Us
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Our Mission & Vision
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We're dedicated to revolutionizing web development by making it more accessible,
          efficient, and enjoyable for developers worldwide.
        </p>
        <Button onClick={() => setShowContactDialog(true)}>Contact Us</Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
            <CardDescription>How it all began</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Founded in 2023, our platform emerged from a simple idea: make web development
              more intuitive and powerful. What started as a small project has grown into
              a comprehensive solution used by developers worldwide.
            </p>
            <p className="text-sm text-muted-foreground">
              Today, we're proud to serve thousands of developers, helping them build
              better web applications faster than ever before.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>What drives us forward</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Innovation</Badge>
              <Badge variant="outline">Quality</Badge>
              <Badge variant="outline">Community</Badge>
              <Badge variant="outline">Transparency</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              We believe in pushing the boundaries of what's possible while maintaining
              the highest standards of quality and fostering a supportive community.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-center">Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4" />
                  <div className="h-6 bg-muted rounded w-3/4 mx-auto mb-2" />
                  <div className="h-4 bg-muted rounded w-1/2 mx-auto" />
                </CardHeader>
                <CardContent>
                  <div className="h-16 bg-muted rounded" />
                </CardContent>
              </Card>
            ))
          ) : (
            teamMembers.map((member) => (
              <MemberCard
                key={member.name}
                member={member}
                onClick={setSelectedMember}
              />
            ))
          )}
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Get in touch with our team for any inquiries or support.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a 
                href="mailto:contact@company.com"
                className="text-primary hover:underline"
              >
                contact@company.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <ContactMap />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Member Dialog */}
      <MemberDialog member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
}