
export interface Product { // Kept for potential other uses, or could be removed if Spices don't use it.
  id: string;
  name: string;
  // General fields, specifics moved to DetailedCoffeeProduct or Spice
  origin?: string;
  imageUrl?: string; // Generic image
}

export interface DetailedCoffeeProduct {
  id: string;
  productName: string;
  origin: string;
  typeOfBeans: string;
  beanSizing: string;
  grade: string;
  defectPer600g: string;
  outTurnPer50kg: string;
  weightKg: string;
  process: string;
  fobPriceINR: number;
  cifPriceINR: number;
  fobPriceUSD: number;
  cifPriceUSD: number;
  roastingNotes: string;
  imageUrl: string;
}

export interface PriceTickerItem {
  name: string;
  fobPriceINR: number;
  cifPriceINR: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  experience: string;
  imageUrl: string;
}

export enum Currency {
  INR = "INR",
  USD = "USD",
  EUR = "EUR",
  GBP = "GBP",
  JPY = "JPY",
}

export interface ExchangeRates {
  [key: string]: number; // Rate relative to INR
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Spice {
  id: string;
  name: string;
  botanicalName: string;
  description: string;
  origin: string;
  formsAvailable: string[];
  gradesAvailable: string[];
  imageUrl: string;
  aromaProfile?: string;
  culinaryUses?: string;
}