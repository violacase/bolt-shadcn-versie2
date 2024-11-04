export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  featuredImage: string;
  categories: string[];
  tags: string[];
  readingTime: number;
}

export interface BlogResponse {
  posts: Post[];
  totalPosts: number;
  currentPage: number;
  totalPages: number;
}