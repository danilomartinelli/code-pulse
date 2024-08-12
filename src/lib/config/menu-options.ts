import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";

const icons = {
  Home,
  Workflows,
  Settings,
  Category,
  Payment,
  Templates,
  Logs,
};

const menuData = [
  { name: "Dashboard", icon: "Home", href: "/dashboard" },
  { name: "Workflows", icon: "Workflows", href: "/workflows" },
  { name: "Settings", icon: "Settings", href: "/settings" },
  { name: "Connections", icon: "Category", href: "/connections" },
  { name: "Billing", icon: "Payment", href: "/billing" },
  { name: "Templates", icon: "Templates", href: "/templates" },
  { name: "Logs", icon: "Logs", href: "/logs" },
];

const menuOptions = menuData.map((item) => ({
  ...item,
  Component: icons[item.icon as keyof typeof icons],
}));

export default menuOptions;
