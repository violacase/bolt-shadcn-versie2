import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactMap } from "@/components/maps/ContactMap";

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Contact
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Neem Contact Met Ons Op
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Heeft u vragen of wilt u meer informatie? Neem gerust contact met ons op.
        </p>
      </div>

      <div className="grid gap-6 max-w-3xl mx-auto">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Mail className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a 
                href="mailto:info@violacase.nl"
                className="text-primary hover:underline"
              >
                info@violacase.nl
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <Phone className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Telefoon</h3>
              <p className="text-muted-foreground">+31 (0)6 12345678</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <MapPin className="h-6 w-6 text-primary" />
            <div>
              <h3 className="font-semibold">Adres</h3>
              <ContactMap />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}