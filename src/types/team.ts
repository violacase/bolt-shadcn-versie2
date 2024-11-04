export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  details?: {
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

export interface Employee {
  name: string;
  role: string;
  image: string;
  skills: string[];
  location: string;
  details?: {
    email: string;
    phone: string;
    department: string;
    joinDate: string;
    projects: string[];
    expertise: string[];
    social: {
      github: string;
      linkedin: string;
    };
  };
}