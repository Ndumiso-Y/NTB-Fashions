export interface NavItem {
  label: string;
  path: string;
}

export const navigationItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Collections", path: "/collections" },
  { label: "Custom Process", path: "/process" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];
