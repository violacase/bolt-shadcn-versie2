import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { BlogCard } from "@/components/BlogCard";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchBlogPosts } from "@/lib/api";
import type { Post } from "@/types/blog";

function BlogSkeleton() {
  return (
    <div className="space-y-4">
      <div className="aspect-video w-full bg-muted rounded-lg" />
      <div className="space-y-2">
        <div className="h-4 w-1/4 bg-muted rounded" />
        <div className="h-8 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
      </div>
    </div>
  );
}

export function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const data = await fetchBlogPosts();
        setPosts(data.posts);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Our Blog
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Latest Articles & Insights
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay up to date with the latest trends, tutorials, and insights in web development,
          programming, and technology.
        </p>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-[400px]">
              <BlogSkeleton />
            </Skeleton>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}