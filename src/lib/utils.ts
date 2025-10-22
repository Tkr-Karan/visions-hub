import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Project data without image paths (images will be loaded dynamically)
export const projects = [
  {
    id: 1,
    title: "CoWorking Space, Noida",
    category: "Commercial",
    location: "Noida, Uttar Pradesh",
    date: "September 2024",
    team: "5 Members",
    description:
      "Modern co-working space with premium gypsum partitions, creating flexible workspaces with excellent acoustics and professional aesthetics.",
    features: [
      "Acoustic Insulation",
      "Fire Resistant",
      "Modular Design",
      "Easy Installation",
    ],
  },
  {
    id: 2,
    title: "Residential Project, Ghaziabad",
    category: "Residential",
    location: "Ghaziabad, Uttar Pradesh",
    date: "September 2024",
    team: "3 Members",
    description:
      "Elegant partition solution for residential space, maximizing space utilization while maintaining privacy and modern aesthetics.",
    features: [
      "Space Optimization",
      "Sound Proofing",
      "Custom Design",
      "Quick Installation",
    ],
  },
  {
    id: 3,
    title: "Infoya Office, Chennai",
    category: "Commercial",
    location: "Chennai, Tamil Nadu",
    date: "September 2024",
    team: "4 Members",
    description:
      "Professional office partition system for Infoya, creating modern workspaces with excellent functionality and corporate aesthetics.",
    features: [
      "Professional Design",
      "Durable Construction",
      "Flexible Layout",
      "Cost Effective",
    ],
  },
  {
    id: 4,
    title: "JettWings Office, Chandigarh",
    category: "Commercial",
    location: "Chandigarh, Punjab",
    date: "September 2024",
    team: "4 Members",
    description:
      "Modern office partition system for JettWings, creating efficient workspaces with premium gypsum solutions and contemporary design.",
    features: [
      "Modern Design",
      "Acoustic Control",
      "Professional Finish",
      "Easy Maintenance",
    ],
  },
  {
    id: 5,
    title: "Kasna Project, Greater Noida",
    category: "Residential",
    location: "Greater Noida, Uttar Pradesh",
    date: "September 2024",
    team: "3 Members",
    description:
      "Residential partition solution in Greater Noida, creating functional living spaces with elegant gypsum partitions.",
    features: [
      "Residential Focus",
      "Space Efficiency",
      "Aesthetic Appeal",
      "Quality Materials",
    ],
  },
  {
    id: 6,
    title: "LogixTechnova Office, Noida",
    category: "Commercial",
    location: "Noida, Uttar Pradesh",
    date: "September 2024",
    team: "4 Members",
    description:
      "Professional office partition system for LogixTechnova, creating modern workspaces with excellent functionality and corporate standards.",
    features: [
      "Corporate Design",
      "High Quality Finish",
      "Professional Installation",
      "Durable Materials",
    ],
  },
  {
    id: 7,
    title: "Mohali Project, Punjab",
    category: "Residential",
    location: "Mohali, Punjab",
    date: "September 2024",
    team: "3 Members",
    description:
      "Residential partition project in Mohali, creating beautiful living spaces with premium gypsum solutions and modern design.",
    features: [
      "Modern Residential Design",
      "Quality Craftsmanship",
      "Custom Solutions",
      "Client Satisfaction",
    ],
  },
];
