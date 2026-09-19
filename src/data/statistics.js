import {
  FiCalendar,
  FiMapPin,
  FiShoppingBag,
  FiUsers,
} from "react-icons/fi";

export const companyStatistics = [
  {
    id: "founded",
    value: "2001",
    suffix: "",
    label: "Tahun Berdiri",
    description: "Berpengalaman dalam industri retail telekomunikasi.",
    icon: FiCalendar,
  },
  {
    id: "stores",
    value: "30",
    suffix: "+",
    label: "Jaringan Toko",
    description: "Jaringan retail yang tersebar di Jawa Tengah.",
    icon: FiShoppingBag,
  },
  {
    id: "region",
    value: "1",
    suffix: "",
    label: "Wilayah Utama",
    description: "Jaringan utama yang berkembang di Jawa Tengah.",
    icon: FiMapPin,
  },
  {
    id: "team",
    value: "200",
    suffix: "+",
    label: "Tenaga Profesional",
    description: "Didukung oleh tim untuk memberikan pelayanan terbaik.",
    icon: FiUsers,
  },
];