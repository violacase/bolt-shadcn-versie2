import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Clock, Users, Zap } from "lucide-react";

export function Extra() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Extra Informatie
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Waarom Violacase?
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ontdek wat ons uniek maakt en hoe wij het verschil maken voor onze klanten.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <Award className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Kwaliteit Gegarandeerd</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We streven naar de hoogste kwaliteit in al onze projecten en diensten.
              Onze expertise en toewijding zorgen voor uitstekende resultaten.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Clock className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Snelle Service</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reageren snel op vragen en verzoeken van onze klanten.
              Tijdige oplevering van projecten is voor ons een prioriteit.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Persoonlijke Aanpak</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We geloven in een persoonlijke benadering en werken nauw samen met
              onze klanten om hun doelen te bereiken.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Innovatieve Oplossingen</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We blijven op de hoogte van de laatste technologieën en trends om
              innovatieve oplossingen te bieden.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}