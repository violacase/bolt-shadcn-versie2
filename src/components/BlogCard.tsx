import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Post } from "@/types/blog";
import { format } from "date-fns";

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const navigate = useNavigate();

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => navigate(`/blog/${post.id}`)}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {post.categories.map(category => (
            <Badge key={category} variant="secondary">
              {category}
            </Badge>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold leading-tight mb-2 hover:text-primary transition-colors">
            {post.title}
          </h2>
          <p className="text-muted-foreground line-clamp-2">
            {post.excerpt}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{post.author.name}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-muted-foreground text-sm">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {format(new Date(post.date), 'MMM d, yyyy')}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readingTime} min read
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}