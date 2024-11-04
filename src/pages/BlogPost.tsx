import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import { fetchBlogPosts } from "@/lib/api";
import { BlogNavigation } from "@/components/BlogNavigation";
import type { Post } from "@/types/blog";

function PostSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-8 w-3/4 bg-muted rounded" />
      <div className="h-4 w-1/4 bg-muted rounded" />
      <div className="aspect-video w-full bg-muted rounded-lg" />
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-4 bg-muted rounded w-full" />
        ))}
      </div>
    </div>
  );
}

export function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [previousPost, setPreviousPost] = useState<Post | null>(null);
  const [nextPost, setNextPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPost() {
      try {
        const data = await fetchBlogPosts();
        const currentIndex = data.posts.findIndex(p => p.id === Number(id));
        
        if (currentIndex !== -1) {
          setPost(data.posts[currentIndex]);
          setPreviousPost(currentIndex > 0 ? data.posts[currentIndex - 1] : null);
          setNextPost(currentIndex < data.posts.length - 1 ? data.posts[currentIndex + 1] : null);
        } else {
          setPost(null);
          setPreviousPost(null);
          setNextPost(null);
        }
      } catch (error) {
        console.error('Failed to fetch blog post:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <PostSkeleton />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground">
          The blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.categories.map(category => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-muted-foreground">
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
        </div>

        {/* Featured Image */}
        <div className="aspect-video relative rounded-lg overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-muted-foreground mb-8">
            {post.excerpt}
          </p>
          <div className="space-y-4">
            {post.content}
          </div>
        </div>

        {/* Tags */}
        <div className="pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <BlogNavigation
          currentPost={post}
          previousPost={previousPost}
          nextPost={nextPost}
        />
      </div>
    </article>
  );
}