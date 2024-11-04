import type { BlogResponse } from '@/types/blog';

const MOCK_API_DELAY = 800; // Simulate network delay

export async function fetchBlogPosts(page: number = 1): Promise<BlogResponse> {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, MOCK_API_DELAY));

  return {
    posts: [
      {
        id: 1,
        title: "The Future of Web Development: What's Next in 2024",
        excerpt: "Explore the emerging trends and technologies shaping the future of web development, from AI-powered tools to WebAssembly innovations.",
        content: `Web development is evolving at an unprecedented pace, and 2024 promises to bring even more exciting changes to the landscape. As we move forward, several key trends are emerging that will shape how we build and deploy web applications.

        Artificial Intelligence and Machine Learning are becoming increasingly integrated into development workflows. From AI-powered code completion to automated testing and optimization, these tools are revolutionizing how developers work.

        WebAssembly continues to gain traction, enabling high-performance applications in the browser. This technology bridges the gap between web and native applications, opening new possibilities for complex web applications.

        Edge computing is another area seeing significant growth. By moving computation closer to users, we can achieve better performance and lower latency. This is particularly important for real-time applications and global services.

        The rise of no-code and low-code platforms is democratizing web development, making it accessible to a broader audience while allowing professional developers to focus on more complex challenges.`,
        date: "2024-03-15",
        author: {
          name: "Alex Chen",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
        categories: ["Technology", "Web Development"],
        tags: ["JavaScript", "WebAssembly", "AI"],
        readingTime: 8
      },
      {
        id: 2,
        title: "Mastering React Performance Optimization",
        excerpt: "Learn advanced techniques for optimizing React applications, from code splitting to efficient state management.",
        content: `Performance optimization is crucial for modern web applications. This comprehensive guide explores various techniques to enhance your React application's performance.

        We'll dive deep into code splitting strategies, efficient state management patterns, and advanced hooks usage. Learn how to identify and fix common performance bottlenecks.

        Understanding React's rendering behavior and optimization techniques is essential for building scalable applications. We'll explore practical examples and real-world scenarios.`,
        date: "2024-03-12",
        author: {
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
        categories: ["React", "Performance"],
        tags: ["React", "JavaScript", "Optimization"],
        readingTime: 10
      },
      {
        id: 3,
        title: "Building Scalable APIs with Node.js",
        excerpt: "Discover best practices for building robust and scalable APIs using Node.js and Express.",
        content: `Building scalable APIs requires careful planning and implementation. This guide covers essential patterns and practices for Node.js API development.

        Learn about authentication, rate limiting, caching strategies, and database optimization. We'll also explore microservices architecture and API documentation.

        Security considerations and error handling patterns are crucial for production-ready APIs. We'll discuss real-world examples and common pitfalls to avoid.`,
        date: "2024-03-10",
        author: {
          name: "Michael Brown",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
        categories: ["Backend", "API"],
        tags: ["Node.js", "Express", "REST"],
        readingTime: 12
      },
      {
        id: 4,
        title: "CSS Architecture for Large Applications",
        excerpt: "Learn how to structure and maintain CSS in large-scale applications using modern methodologies.",
        content: `Managing CSS in large applications presents unique challenges. This article explores modern CSS architecture patterns and methodologies.

        We'll cover CSS modules, CSS-in-JS solutions, and utility-first frameworks. Learn how to organize styles for maintainability and scalability.

        Performance considerations and browser compatibility are key aspects of CSS architecture. We'll discuss practical strategies for managing complexity.`,
        date: "2024-03-08",
        author: {
          name: "Emily Davis",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop",
        categories: ["CSS", "Architecture"],
        tags: ["CSS", "Design Systems", "Methodology"],
        readingTime: 9
      },
      {
        id: 5,
        title: "Introduction to TypeScript for JavaScript Developers",
        excerpt: "A comprehensive guide to TypeScript fundamentals for JavaScript developers looking to enhance their code quality.",
        content: `TypeScript adds powerful features to JavaScript, making it easier to write and maintain large applications. This guide introduces key TypeScript concepts.

        Learn about type systems, interfaces, generics, and advanced features. We'll explore real-world examples and migration strategies.

        Understanding TypeScript's type system and compiler options is essential for effective development. We'll cover best practices and common patterns.`,
        date: "2024-03-05",
        author: {
          name: "David Kim",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=600&fit=crop",
        categories: ["TypeScript", "JavaScript"],
        tags: ["TypeScript", "JavaScript", "Programming"],
        readingTime: 11
      },
      {
        id: 6,
        title: "Modern Authentication Patterns",
        excerpt: "Explore current best practices for implementing secure authentication in web applications.",
        content: `Authentication is a critical aspect of web application security. This guide covers modern authentication patterns and implementation strategies.

        Learn about JWT, OAuth 2.0, and OpenID Connect. We'll discuss secure session management and token-based authentication.

        Security considerations and user experience are both important aspects of authentication design. We'll explore practical examples and common security pitfalls.`,
        date: "2024-03-03",
        author: {
          name: "Lisa Wong",
          avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=1200&h=600&fit=crop",
        categories: ["Security", "Authentication"],
        tags: ["Security", "JWT", "OAuth"],
        readingTime: 13
      },
      {
        id: 7,
        title: "State Management in 2024",
        excerpt: "Compare modern state management solutions and learn when to use each approach.",
        content: `State management continues to evolve in the frontend ecosystem. This article compares different approaches and their use cases.

        We'll examine Redux, MobX, Zustand, and other popular solutions. Learn about local state, global state, and server state management.

        Choosing the right state management solution is crucial for application architecture. We'll discuss trade-offs and selection criteria.`,
        date: "2024-02-28",
        author: {
          name: "James Wilson",
          avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
        categories: ["Frontend", "State Management"],
        tags: ["Redux", "State", "React"],
        readingTime: 10
      },
      {
        id: 8,
        title: "Microservices vs Monoliths",
        excerpt: "Analyze the pros and cons of different architectural approaches and make informed decisions.",
        content: `Choosing between microservices and monolithic architecture is a crucial decision. This guide helps you understand the trade-offs involved.

        We'll explore scalability, maintenance, deployment, and team organization considerations. Learn about communication patterns and service boundaries.

        Real-world case studies provide insights into successful architectural transitions. We'll discuss when to choose each approach.`,
        date: "2024-02-25",
        author: {
          name: "Robert Martinez",
          avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
        categories: ["Architecture", "Backend"],
        tags: ["Microservices", "Architecture", "Design"],
        readingTime: 14
      },
      {
        id: 9,
        title: "Web Accessibility Guidelines",
        excerpt: "Learn how to make your web applications accessible to all users following WCAG guidelines.",
        content: `Web accessibility is essential for creating inclusive applications. This guide covers WCAG guidelines and implementation strategies.

        Learn about semantic HTML, ARIA attributes, and keyboard navigation. We'll explore testing tools and automation techniques.

        Real-world examples demonstrate how to implement accessible features without compromising design. We'll discuss common patterns and best practices.`,
        date: "2024-02-22",
        author: {
          name: "Maria Garcia",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&h=600&fit=crop",
        categories: ["Accessibility", "Frontend"],
        tags: ["A11y", "WCAG", "UX"],
        readingTime: 9
      },
      {
        id: 10,
        title: "DevOps Best Practices",
        excerpt: "Discover essential DevOps practices for modern web development teams.",
        content: `DevOps practices are crucial for efficient software delivery. This guide covers key concepts and implementation strategies.

        Learn about CI/CD pipelines, infrastructure as code, and monitoring solutions. We'll explore containerization and orchestration tools.

        Automation and collaboration are central to DevOps success. We'll discuss real-world examples and team workflows.`,
        date: "2024-02-20",
        author: {
          name: "Chris Taylor",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&q=90"
        },
        featuredImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
        categories: ["DevOps", "Infrastructure"],
        tags: ["CI/CD", "Docker", "Kubernetes"],
        readingTime: 12
      }
    ],
    totalPosts: 10,
    currentPage: page,
    totalPages: 1
  };
}