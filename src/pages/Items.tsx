import { Badge } from "@/components/ui/badge";
import { ItemList } from "@/components/items/ItemList";

export function Items() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Featured Items
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Discover Amazing Content
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of high-quality items, featuring the latest
          trends and insights in technology and development.
        </p>
      </div>

      <ItemList />
    </div>
  );
}