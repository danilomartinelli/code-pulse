import { Feature } from "@/app/_components/pricing-card";
import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";

const generateClients = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    href: `/${index + 1}.png`,
  }));

export const clients = generateClients(10);

const getThumbnail = (index: number) => `/p${(index % 6) + 1}.png`;

const productData = [
  { title: "Moonbeam", link: "https://gomoonbeam.com" },
  { title: "Cursor", link: "https://cursor.so" },
  { title: "Rogue", link: "https://userogue.com" },
  { title: "Editorially", link: "https://editorially.org" },
  { title: "Editrix AI", link: "https://editrix.ai" },
  { title: "Pixel Perfect", link: "https://app.pixelperfect.quest" },
  { title: "Algochurn", link: "https://algochurn.com" },
  { title: "Aceternity UI", link: "https://ui.aceternity.com" },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
  },
  { title: "SmartBridge", link: "https://smartbridgetech.com" },
  { title: "Renderwork Studio", link: "https://renderwork.studio" },
  { title: "Creme Digital", link: "https://cremedigital.com" },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
  },
  { title: "Invoker Labs", link: "https://invoker.lol" },
  { title: "E Free Invoice", link: "https://efreeinvoice.com" },
];

export const products = productData.map((product, index) => ({
  ...product,
  thumbnail: getThumbnail(index),
}));

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

export const menuOptions = menuData.map((item) => ({
  ...item,
  Component: icons[item.icon as keyof typeof icons],
}));

const createFeatures = (texts: string[]): Feature[] => {
  return texts.map((text, index) => ({
    id: `feature-${index + 1}`,
    text,
  }));
};

export const commonFeatures = createFeatures([
  "3 Free automations",
  "100 tasks per month",
  "Two-step Actions",
]);
