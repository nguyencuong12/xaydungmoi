import { v4 as uuidv4 } from "uuid";
import { Home, Tag, PhoneCall, Archive, Facebook, Youtube } from "react-feather";

const TopMenuList = [
  {
    id: uuidv4(),
    icon: Home,
    title: "Trang chủ",
    href: "/",
  },
  {
    id: uuidv4(),
    icon: Tag,
    title: "Khuyến Mãi",
    href: "/",
  },
  {
    id: uuidv4(),
    icon: PhoneCall,
    title: "Liên Hệ",
    href: "/",
  },
  {
    id: uuidv4(),
    icon: Archive,
    title: "Tin Tức",
    href: "/",
  },
  {
    id: uuidv4(),
    icon: Facebook,
    title: "Facebook",
    href: "/",
  },
  {
    id: uuidv4(),
    icon: Youtube,
    title: "Youtube",
    href: "/",
  },
];

export default TopMenuList;
