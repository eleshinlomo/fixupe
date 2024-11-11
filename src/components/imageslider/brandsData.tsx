import { Brand } from "@/types/brand";

interface BrandProps {
    id: number;
    name: string;
    href: string;
    image: string;
    imageLight?: string;
  
}

export const brandsData: BrandProps[] = [
  {
    id: 6,
    name: "LinkedIn",
    href: "/",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
  },
  {
    id: 1,
    name: "CNN",
    href: "/",
    image: "/images/brands/uideck.svg",
    imageLight: "/images/brands/uideck-light.svg",
  },
  {
    id: 2,
    name: "Facebook",
    href: "https://tailgrids.com",
    image: "/images/logo/petrolage_logo.png",
    imageLight: "/images/brands/tailgrids-light.svg",
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://lineicons.com",
    image: "/images/logo/logo.svg",
    imageLight: "/images/logo/logo.svg",
  },
  {
    id: 4,
    name: "TikTok",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin.svg",
    imageLight: "/images/brands/tailadmin-light.svg",
  },
  
];

export default brandsData;
