// This file is used to mock data for the components while developing the UI.

import { Feature } from "@/app/_components/pricing-card";

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
