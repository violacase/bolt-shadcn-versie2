import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Post } from "@/types/blog";

interface BlogNavigationProps {
  currentPost: Post;
  previousPost: Post | null;
  nextPost: Post | null;
}

export function BlogNavigation({ currentPost, previousPost, nextPost }: BlogNavigationProps) {
  const navigate = useNavigate();

  return (
    <div className="border-t mt-16 pt-8">
      <div className="flex justify-between items-center gap-4">
        <Button
          variant="outline"
          className="flex-1 sm:flex-initial"
          onClick={() => previousPost && navigate(`/blog/${previousPost.id}`)}
          disabled={!previousPost}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate('/blog')}
          className="flex-initial"
        >
          <Home className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          className="flex-1 sm:flex-initial"
          onClick={() => nextPost && navigate(`/blog/${nextPost.id}`)}
          disabled={!nextPost}
        >
          Next
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-muted-foreground">
        {previousPost && (
          <div className="text-left">
            <div className="font-medium text-foreground">Previous Post</div>
            <div className="line-clamp-1">{previousPost.title}</div>
          </div>
        )}
        {nextPost && (
          <div className="text-right ml-auto">
            <div className="font-medium text-foreground">Next Post</div>
            <div className="line-clamp-1">{nextPost.title}</div>
          </div>
        )}
      </div>
    </div>
  );
}