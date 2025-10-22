import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// Real project data with your actual images
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
    images: [
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/Screenshot 2025-09-11 155636.png",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/Screenshot 2025-09-11 155722.png",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 3.43.22 PM.jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 3.44.36 PM.jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.40 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.40 PM.jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.41 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.04.41 PM.jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.06.36 PM.jpeg",
      "/src/assets/Amayaas - Site Images/CoWorking, Noida/WhatsApp Image 2025-09-11 at 4.06.37 PM.jpeg",
    ],
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
    images: [
      "/src/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.50 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.50 PM.jpeg",
      "/src/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.51 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.51 PM.jpeg",
      "/src/assets/Amayaas - Site Images/Ghaziabad/WhatsApp Image 2025-09-11 at 3.36.52 PM.jpeg",
    ],
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
    images: [
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.27 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.27 PM.jpeg",
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.28 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.28 PM (2).jpeg",
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.28 PM.jpeg",
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.29 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Infoya, Chennai/WhatsApp Image 2025-09-11 at 4.01.29 PM.jpeg",
    ],
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
    images: [
      "/src/assets/Amayaas - Site Images/JettWings, Chandigarh/WhatsApp Image 2025-09-11 at 4.08.44 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/JettWings, Chandigarh/WhatsApp Image 2025-09-11 at 4.08.45 PM (2).jpeg",
      "/src/assets/Amayaas - Site Images/JettWings, Chandigarh/WhatsApp Image 2025-09-11 at 4.08.45 PM (3).jpeg",
    ],
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
    images: [
      "/src/assets/Amayaas - Site Images/Kasna, Gr Noida/WhatsApp Image 2025-09-11 at 3.07.37 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Kasna, Gr Noida/WhatsApp Image 2025-09-11 at 3.07.37 PM (2).jpeg",
      "/src/assets/Amayaas - Site Images/Kasna, Gr Noida/WhatsApp Image 2025-09-11 at 3.07.37 PM.jpeg",
    ],
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
    images: [
      "/src/assets/Amayaas - Site Images/LogixTechnova, Noida/WhatsApp Image 2025-09-11 at 3.50.13 PM.jpeg",
      "/src/assets/Amayaas - Site Images/LogixTechnova, Noida/WhatsApp Image 2025-09-11 at 3.59.37 PM.jpeg",
    ],
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
    images: [
      "/src/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.24.37 PM (1).jpeg",
      "/src/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.24.37 PM.jpeg",
      "/src/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.24.38 PM.jpeg",
      "/src/assets/Amayaas - Site Images/Mohali, Punjab/WhatsApp Image 2025-09-11 at 3.46.17 PM.jpeg",
    ],
    features: [
      "Modern Residential Design",
      "Quality Craftsmanship",
      "Custom Solutions",
      "Client Satisfaction",
    ],
  },
];
