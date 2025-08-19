import { Brand } from "@/types/brand";
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaMoneyCheckAlt, FaBuilding, FaGlobe } from "react-icons/fa";

const brandsData: Brand[] = [
  {
    id: 6,
    name:"Mobile Apps",
    image: "/images/brands/formbold.svg",
    imageLight: "/images/brands/formbold-light.svg",
    icon: FaMobileAlt,
  },
  {
    id: 1,
    name: "Ecommerce",
    image: "/images/brands/uideck.svg",
    imageLight: "/images/brands/uideck-light.svg",
    icon: FaShoppingCart,
  },
  {
    id: 2,
    name: "SAAS",
    image: "/images/brands/tailgrids.svg",
    imageLight: "/images/brands/tailgrids-light.svg",
    icon: FaLaptopCode,
  },
  {
    id: 3,
    name: "FinTech",
    image: "/images/brands/lineicons.svg",
    imageLight: "/images/brands/lineicons-light.svg",
    icon: FaMoneyCheckAlt,
  },
  {
    id: 4,
    name: "PropTech",
    image: "/images/brands/tailadmin.svg",
    imageLight: "/images/brands/tailadmin-light.svg",
    icon: FaBuilding,
  },
  {
    id: 5,
    name: "Web Apps",
    image: "/images/brands/plainadmin.svg",
    imageLight: "/images/brands/plainadmin-light.svg",
    icon: FaGlobe,
  },
];


export default brandsData;
