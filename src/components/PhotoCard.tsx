import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Photo } from "@/types/gallery";

interface PhotoCardProps {
  photo: Photo;
  onClick: (photo: Photo) => void;
}

export function PhotoCard({ photo, onClick }: PhotoCardProps) {
  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onClick(photo)}
    >
      <CardContent className="p-0">
        <AspectRatio ratio={1}>
          <img
            src={photo.thumbnail}
            alt={photo.title}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      </CardContent>
    </Card>
  );
}