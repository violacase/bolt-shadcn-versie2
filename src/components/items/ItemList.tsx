import { Item2 } from './Item2';

const items = [
  {
    title: "Modern Web Development Techniques",
    description: "Explore the latest trends and best practices in modern web development. Learn about new frameworks, tools, and methodologies that can enhance your development workflow.",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
    likes: 234,
    comments: 45,
    shares: 12,
    tags: ["WebDev", "JavaScript", "React"]
  },
  {
    title: "Building Scalable Applications",
    description: "Learn how to design and build applications that can scale effectively. Discover architectural patterns and practices that ensure your applications can grow with your user base.",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    likes: 187,
    comments: 32,
    shares: 8,
    tags: ["Architecture", "Scaling", "Performance"]
  },
  {
    title: "UI/UX Design Principles",
    description: "Master the fundamentals of user interface and user experience design. Understand how to create intuitive and engaging user experiences that delight your users.",
    imageUrl: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=500&h=300&fit=crop",
    likes: 156,
    comments: 28,
    shares: 15,
    tags: ["Design", "UI/UX", "Creative"]
  }
];

export function ItemList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Item2 key={index} {...item} />
      ))}
    </div>
  );
}