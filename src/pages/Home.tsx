import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, Shield, Zap } from "lucide-react";

export function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          ⚡️ Welcome to Our Platform
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Build Something Amazing Today
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8">
          Experience the power of modern web development with our comprehensive toolkit.
        </p>
        <div className="flex gap-4 justify-center">
          <Button>
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Rocket className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Lightning Fast</CardTitle>
            <CardDescription>
              Optimized for speed and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our platform is built with performance in mind, ensuring your applications run at peak efficiency.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Shield className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Secure by Default</CardTitle>
            <CardDescription>
              Enterprise-grade security built-in
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Security is our top priority. Rest easy knowing your data is protected by industry-leading measures.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Zap className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Real-time Updates</CardTitle>
            <CardDescription>
              Stay synchronized with live data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Experience seamless real-time updates and collaborative features that keep your team in sync.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}