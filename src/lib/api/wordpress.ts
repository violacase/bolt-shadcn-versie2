import type { TeamMember, Employee } from '@/types/team';

const API_DELAY = 800; // Simulate network delay

interface WPTeamMember {
  id: number;
  title: { rendered: string };
  acf: {
    role: string;
    image: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    projects: string[];
    achievements: string[];
    social: {
      github: string;
      linkedin: string;
      twitter: string;
      website: string;
    };
  };
}

interface WPEmployee {
  id: number;
  title: { rendered: string };
  acf: {
    role: string;
    image: string;
    skills: string[];
    location: string;
    email: string;
    phone: string;
    department: string;
    join_date: string;
    projects: string[];
    expertise: string[];
    social: {
      github: string;
      linkedin: string;
    };
  };
}

// Transform WordPress response to our app's format
function transformWPTeamMember(wpMember: WPTeamMember): TeamMember {
  return {
    name: wpMember.title.rendered,
    role: wpMember.acf.role,
    image: wpMember.acf.image,
    bio: wpMember.acf.bio,
    details: {
      email: wpMember.acf.email,
      phone: wpMember.acf.phone,
      location: wpMember.acf.location,
      projects: wpMember.acf.projects,
      achievements: wpMember.acf.achievements,
      social: wpMember.acf.social,
    },
  };
}

function transformWPEmployee(wpEmployee: WPEmployee): Employee {
  return {
    name: wpEmployee.title.rendered,
    role: wpEmployee.acf.role,
    image: wpEmployee.acf.image,
    skills: wpEmployee.acf.skills,
    location: wpEmployee.acf.location,
    details: {
      email: wpEmployee.acf.email,
      phone: wpEmployee.acf.phone,
      department: wpEmployee.acf.department,
      joinDate: wpEmployee.acf.join_date,
      projects: wpEmployee.acf.projects,
      expertise: wpEmployee.acf.expertise,
      social: wpEmployee.acf.social,
    },
  };
}

// Mock WordPress REST API responses
const mockWPTeamMembers: WPTeamMember[] = [
  {
    id: 1,
    title: { rendered: "Sarah Johnson" },
    acf: {
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Visionary leader with 15+ years in tech",
      email: "sarah.johnson@company.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      projects: [
        "Company Foundation 2023",
        "Series A Funding Round",
        "Global Expansion Initiative"
      ],
      achievements: [
        "Forbes 30 Under 30",
        "Tech Innovation Award 2023",
        "Featured in TechCrunch"
      ],
      social: {
        github: "github.com/sarahj",
        linkedin: "linkedin.com/in/sarahj",
        twitter: "twitter.com/sarahj",
        website: "sarahjohnson.dev"
      }
    }
  },
  {
    id: 2,
    title: { rendered: "Michael Chen" },
    acf: {
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Engineering expert & system architect",
      email: "michael.chen@company.com",
      phone: "+1 (555) 234-5678",
      location: "Seattle, WA",
      projects: [
        "Cloud Infrastructure Redesign",
        "AI Integration Platform",
        "Developer Tools Suite"
      ],
      achievements: [
        "Patent Holder: Distributed Systems",
        "Best Tech Leadership 2023",
        "Published Author: Cloud Architecture"
      ],
      social: {
        github: "github.com/michaelc",
        linkedin: "linkedin.com/in/michaelc",
        twitter: "twitter.com/michaelc",
        website: "michaelchen.tech"
      }
    }
  },
  {
    id: 3,
    title: { rendered: "Emily Rodriguez" },
    acf: {
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Award-winning designer & UX specialist",
      email: "emily.rodriguez@company.com",
      phone: "+1 (555) 345-6789",
      location: "Los Angeles, CA",
      projects: [
        "Brand Redesign 2024",
        "Mobile App UX Overhaul",
        "Design System Implementation"
      ],
      achievements: [
        "Design Innovation Award",
        "Speaker at DesignCon 2023",
        "UX Portfolio of the Year"
      ],
      social: {
        github: "github.com/emilyr",
        linkedin: "linkedin.com/in/emilyr",
        twitter: "twitter.com/emilyr",
        website: "emilyrodriguez.design"
      }
    }
  },
  {
    id: 4,
    title: { rendered: "James Wilson" },
    acf: {
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Scaling engineering teams & systems",
      email: "james.wilson@company.com",
      phone: "+1 (555) 456-7890",
      location: "Boston, MA",
      projects: [
        "Engineering Team Scale-up",
        "Microservices Architecture",
        "DevOps Transformation"
      ],
      achievements: [
        "Engineering Excellence Award",
        "Scaled team from 10 to 100+",
        "Created Engineering Playbook"
      ],
      social: {
        github: "github.com/jamesw",
        linkedin: "linkedin.com/in/jamesw",
        twitter: "twitter.com/jamesw",
        website: "jameswilson.tech"
      }
    }
  },
  {
    id: 5,
    title: { rendered: "Sofia Patel" },
    acf: {
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Product strategist & innovation leader",
      email: "sofia.patel@company.com",
      phone: "+1 (555) 567-8901",
      location: "New York, NY",
      projects: [
        "Product Strategy 2024",
        "Market Expansion",
        "User Growth Initiative"
      ],
      achievements: [
        "PM of the Year 2023",
        "Launched 5 Successful Products",
        "2M+ Active Users Achievement"
      ],
      social: {
        github: "github.com/sofiap",
        linkedin: "linkedin.com/in/sofiap",
        twitter: "twitter.com/sofiap",
        website: "sofiapatel.com"
      }
    }
  },
  {
    id: 6,
    title: { rendered: "Alex Thompson" },
    acf: {
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Leading AI innovation & research",
      email: "alex.thompson@company.com",
      phone: "+1 (555) 678-9012",
      location: "Austin, TX",
      projects: [
        "AI Model Development",
        "Research Paper Publications",
        "ML Infrastructure"
      ],
      achievements: [
        "PhD in Machine Learning",
        "10+ Research Papers Published",
        "AI Innovation Patent Holder"
      ],
      social: {
        github: "github.com/alext",
        linkedin: "linkedin.com/in/alext",
        twitter: "twitter.com/alext",
        website: "alexthompson.ai"
      }
    }
  },
  {
    id: 7,
    title: { rendered: "Maria Garcia" },
    acf: {
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Customer experience & satisfaction expert",
      email: "maria.garcia@company.com",
      phone: "+1 (555) 789-0123",
      location: "Miami, FL",
      projects: [
        "Customer Success Program",
        "Support System Overhaul",
        "Client Retention Strategy"
      ],
      achievements: [
        "98% Customer Satisfaction Rate",
        "Built CS Team from Ground Up",
        "Customer Success Leader Award"
      ],
      social: {
        github: "github.com/mariag",
        linkedin: "linkedin.com/in/mariag",
        twitter: "twitter.com/mariag",
        website: "mariagarcia.com"
      }
    }
  },
  {
    id: 8,
    title: { rendered: "David Kim" },
    acf: {
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Cybersecurity expert & privacy advocate",
      email: "david.kim@company.com",
      phone: "+1 (555) 890-1234",
      location: "Washington, DC",
      projects: [
        "Security Infrastructure",
        "Privacy Framework",
        "Compliance Program"
      ],
      achievements: [
        "CISSP Certification",
        "Zero Security Breaches",
        "Security Innovation Award"
      ],
      social: {
        github: "github.com/davidk",
        linkedin: "linkedin.com/in/davidk",
        twitter: "twitter.com/davidk",
        website: "davidkim.security"
      }
    }
  },
  {
    id: 9,
    title: { rendered: "Rachel Foster" },
    acf: {
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Digital marketing strategist & brand builder",
      email: "rachel.foster@company.com",
      phone: "+1 (555) 901-2345",
      location: "Chicago, IL",
      projects: [
        "Brand Strategy 2024",
        "Digital Marketing Campaign",
        "Market Positioning"
      ],
      achievements: [
        "Marketing Excellence Award",
        "300% Growth in Brand Recognition",
        "Successful IPO Marketing"
      ],
      social: {
        github: "github.com/rachelf",
        linkedin: "linkedin.com/in/rachelf",
        twitter: "twitter.com/rachelf",
        website: "rachelfoster.marketing"
      }
    }
  },
  {
    id: 10,
    title: { rendered: "Thomas Anderson" },
    acf: {
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&h=150&auto=format&fit=crop",
      bio: "Operations efficiency & scale expert",
      email: "thomas.anderson@company.com",
      phone: "+1 (555) 012-3456",
      location: "Denver, CO",
      projects: [
        "Operations Automation",
        "Process Optimization",
        "Scaling Infrastructure"
      ],
      achievements: [
        "Operational Excellence Award",
        "50% Cost Reduction Achievement",
        "ISO 9001 Certification Lead"
      ],
      social: {
        github: "github.com/thomasa",
        linkedin: "linkedin.com/in/thomasa",
        twitter: "twitter.com/thomasa",
        website: "thomasanderson.ops"
      }
    }
  }
];

const mockWPEmployees: WPEmployee[] = [
  {
    id: 1,
    title: { rendered: "David Wilson" },
    acf: {
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
      skills: ["React", "Node.js", "TypeScript"],
      location: "New York",
      email: "david.wilson@company.com",
      phone: "+1 (555) 456-7890",
      department: "Engineering",
      join_date: "March 2023",
      projects: [
        "E-commerce Platform",
        "API Gateway Implementation",
        "Performance Optimization"
      ],
      expertise: [
        "Full Stack Development",
        "System Architecture",
        "Cloud Computing",
        "DevOps"
      ],
      social: {
        github: "github.com/davidw",
        linkedin: "linkedin.com/in/davidw"
      }
    }
  },
  {
    id: 2,
    title: { rendered: "Alice Zhang" },
    acf: {
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
      skills: ["UI/UX", "Figma", "User Research"],
      location: "San Francisco",
      email: "alice.zhang@company.com",
      phone: "+1 (555) 567-8901",
      department: "Design",
      join_date: "June 2023",
      projects: [
        "Mobile App Redesign",
        "User Research Study",
        "Design System"
      ],
      expertise: [
        "User Interface Design",
        "Prototyping",
        "User Research",
        "Design Systems"
      ],
      social: {
        github: "github.com/alicez",
        linkedin: "linkedin.com/in/alicez"
      }
    }
  }
];

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  // Simulate API call to WordPress REST API
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  // In a real app, this would be:
  // const response = await fetch('/wp-json/wp/v2/team-members');
  // const data = await response.json();
  
  return mockWPTeamMembers.map(transformWPTeamMember);
}

export async function fetchEmployees(): Promise<Employee[]> {
  // Simulate API call to WordPress REST API
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  // In a real app, this would be:
  // const response = await fetch('/wp-json/wp/v2/employees');
  // const data = await response.json();
  
  return mockWPEmployees.map(transformWPEmployee);
}