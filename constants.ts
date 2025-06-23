import { TeamMember, ExchangeRates, Currency, PriceTickerItem, NavItem, Spice, DetailedCoffeeProduct } from './types';

export const APP_NAME = "Exora Traders";
// Please replace '/images/exora-logo.svg' with the actual path to your new logo.
// Ensure the logo file is placed in a publicly accessible directory (e.g., /public/images/exora-logo.svg or similar depending on your setup).
// An SVG logo is recommended for scalability and sharpness. Provide a PNG as fallback if needed.
export const LOGO_URL = "https://storage.googleapis.com/exoratraders-images/Product%20images/Exora%20Traders%20Logo.png"; 

export const NAVIGATION_LINKS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about" },
  { label: "What We Do", path: "/process" },
  { label: "Products", path: "/products" },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Team", path: "/team" },
  // { label: "Join Our Team", path: "/careers" }, // Removed this line
  { label: "Contact Us", path: "/contact" },
];

const COFFEE_PRODUCTS_STANDARDIZED: DetailedCoffeeProduct[] = [
  {
    id: "arabica-a-interactive",
    productName: "Arabica A",
    origin: "Coorg High Altitude Mountain Range, 1200 mts above sea level",
    typeOfBeans: "Green beans",
    beanSizing: "Screen 17 (6.65 mm & Above), min 90% retention on 6.65mm sieve, max 15% pass 6.00mm. Oblong shape. Moisture 9-13%.",
    grade: "Standard Plantation Grade. Certifications: USDA Organic, Fairtrade, Kosher, Rainforest Alliance. Practices: Shade-grown, agroforestry, organic farming. New national certifications.",
    defectPer600g: "Type 1 to Type 4 (minimal defects)",
    outTurnPer50kg: "25-26 kgs (good yield)",
    weightKg: "Standard 50 kg jute bags",
    process: "Natural",
    fobPriceINR: 520.00,
    cifPriceINR: 530.00,
    fobPriceUSD: 6.22,
    cifPriceUSD: 6.34,
    roastingNotes: "Sensory Profile: Mild acidity, firm/medium body, strong aftertaste, wood, earth, spicy, caramel, chocolate. Delicate, sweet, fruity, floral notes. Balanced acidity, smooth, pleasant, clean aftertaste.\nSuitable Applications: Blends (tames lively acidity/fruitiness from African/Latin American coffees). Espresso, filter coffee. Medium Roast.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Arabica%20A.png"
  },
  {
    id: "arabica-aa-interactive",
    productName: "Arabica AA",
    origin: "Coorg High Altitude Mountain Range, 1200 mts above sea level",
    typeOfBeans: "Green beans",
    beanSizing: "Screen 18 (7.10 mm & Above), min 90% retention on 7.10mm sieve, 100% on 6.65mm. Mysore Nuggets EB: Screen 19 (7.50 mm), 90% retention, 100% on 6.65mm, virtual absence of visual defects.",
    grade: "Premium quality, well-balanced cup. MNEB has 'no tolerance for any defects'. Same certifications as Grade A.",
    defectPer600g: "Type 1 to Type 4 (minimal defects)",
    outTurnPer50kg: "26 kgs (good yield)",
    weightKg: "Standard 50 kg jute bags",
    process: "Natural",
    fobPriceINR: 550.00,
    cifPriceINR: 560.00,
    fobPriceUSD: 6.58,
    cifPriceUSD: 6.70,
    roastingNotes: "Sensory Profile: Similar to A, with potentially enhanced clarity and sweetness due to higher grading. Mysore Nuggets EB: sweet aroma, mild chocolaty note, giddy sweetness, sharp acidity.\nSuitable Applications: Premium blends. Specialty single-origin. Espresso. Medium-light roast for Monsooned.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Arabica%20AA.png"
  },
  {
    id: "arabica-aaa-interactive",
    productName: "Arabica AAA",
    origin: "Coorg High Altitude Mountain Range, 1200 mts above sea level",
    typeOfBeans: "Green beans",
    beanSizing: "Screen 19 (7.50 mm & Above), min 90% retention on 7.50mm sieve, 100% retention on 6.65mm. (e.g. Monsoon Malabar AAA Super).",
    grade: "Highest graded, premium specialty quality. Monsoon Malabar AAA Super is GI-protected. Same certifications as Grade A.",
    defectPer600g: "Type 1 to Type 4 (minimal defects)",
    outTurnPer50kg: "26-27 kgs (exceptional yield)",
    weightKg: "Standard 50 kg jute bags",
    process: "Natural",
    fobPriceINR: 580.00,
    cifPriceINR: 590.00,
    fobPriceUSD: 6.95,
    cifPriceUSD: 7.05,
    roastingNotes: "Sensory Profile: Highest expression of Indian Arabica characteristics, often with refined sweetness, balanced acidity, and distinct floral/fruity notes. Monsoon Malabar AAA Super: smooth, mellow, sandalwood, semisweet chocolate, cloves, cedar, salted caramel.\nSuitable Applications: High-end single-origin offerings. Preferred for French Press, stovetop Moka pot, Espresso.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Arabica%20AAA.png"
  },
  {
    id: "robusta-a-interactive",
    productName: "Robusta A",
    origin: "Coorg High Altitude Mountain Range, 1200 mts above sea level",
    typeOfBeans: "Green beans",
    beanSizing: "Screen 17 (6.65 mm & Above), min 90% retention on 6.65mm sieve, 100% on 6.00mm. Heartier, roly-poly, fat beans. Moisture 8-12.5%.",
    grade: "Standard grade, good commercial quality. Organic certified options available. New national certifications.",
    defectPer600g: "Type 1 to Type 4 (minimal defects)",
    outTurnPer50kg: "25-26 kgs (good yield)",
    weightKg: "Standard 50 kg jute bags",
    process: "Natural",
    fobPriceINR: 470.00,
    cifPriceINR: 480.00,
    fobPriceUSD: 5.60,
    cifPriceUSD: 5.72,
    roastingNotes: "Sensory Profile: Bold, nutty, dark chocolate, almonds, whiskey notes. Deep, bold mouthfeel, smooth, low to no acidity. Earthy, woody, slightly bitter. High caffeine content (2.2-2.7%).\nSuitable Applications: Espresso blends, instant coffee, strong brews. Enhancing milk drinks. Dark Roast.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Robusta%20A.png"
  },
  {
    id: "robusta-aa-interactive", 
    productName: "Robusta AA", // Updated Name
    origin: "Coorg High Altitude Mountain Range, 1200 mts above sea level",
    typeOfBeans: "Green beans",
    beanSizing: "RKR: Screen 17 (6.7 mm), min 90% retention on 6.7mm sieve, 100% on 6.00mm, no defects.", 
    grade: "GI-tagged for Monsooned Robusta. RKR has 'no defects'.", 
    defectPer600g: "Type 1 to Type 4 (minimal defects)", 
    outTurnPer50kg: "26-27 kgs (exceptional yield)",
    weightKg: "Standard 50 kg jute bags",
    process: "Natural", 
    fobPriceINR: 493.00,
    cifPriceINR: 503.00,
    fobPriceUSD: 5.90,
    cifPriceUSD: 6.02,
    roastingNotes: "Sensory Profile: Bold, full-bodied, toasted nuts, rich earthiness, hint of smokiness. Unique monsooning process softens acidity, creating smooth, velvety texture (note: process field now 'Natural'). High quality Robusta can be sweet and spicy with incredible creaminess.\nSuitable Applications: Espresso machines, French presses, moka pots. Longer, slower roast cycles. Higher charge temperature.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Robusta%20AA%20-new.png"
  },
  {
    id: "robusta-aaa-interactive",
    productName: "Robusta AAA", // Updated Name
    origin: "Coorg High Altitude Mountain Range, 1200 mts above sea level",
    typeOfBeans: "Green beans",
    beanSizing: "Highest grade, implying superior size and uniformity (e.g., Monsoon Malabar Rb. AAA). Screen 19+ (>7.5mm).", 
    grade: "Premium bold Robusta, excellent uniformity. Monsoon Malabar AAA Super is GI-protected. Same certifications as Grade A.", 
    defectPer600g: "Type 1 to Type 4 (minimal defects)",
    outTurnPer50kg: "27-28 kgs (very high yield)",
    weightKg: "Standard 50 kg jute bags",
    process: "Natural", 
    fobPriceINR: 510.00,
    cifPriceINR: 520.00,
    fobPriceUSD: 6.10,
    cifPriceUSD: 6.22,
    roastingNotes: "Sensory Profile: Represents the pinnacle of Indian Robusta quality, with refined boldness, enhanced nutty/chocolate notes, and exceptional body/crema. Monsoon Malabar Rb. AAA: smooth, mellow, sandalwood, semisweet chocolate, cloves, cedar, salted caramel (note: process field now 'Natural').\nSuitable Applications: High-end espresso blends, specialty strong brews.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Robusta%20AAA.png"
  }
];

export const DETAILED_COFFEE_PRODUCTS_DATA: DetailedCoffeeProduct[] = COFFEE_PRODUCTS_STANDARDIZED;


export const PRICE_TICKER_DATA: PriceTickerItem[] = DETAILED_COFFEE_PRODUCTS_DATA.map(p => ({
  name: p.productName,
  fobPriceINR: p.fobPriceINR,
  cifPriceINR: p.cifPriceINR,
}));


export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: "tm_akshay",
    name: "Akshay sherigar",
    role: "Managing Partner", 
    location: "India",
    experience: "Specializing in sourcing and building strong supplier relationships in India, Akshay leverages his deep coffee industry background to secure high-quality, ethically produced agricultural products. His entrepreneurial spirit drives our focus on robust supplier networks and governance.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/team%20images/akshay.jpg"
  },
  {
    id: "tm_shreyas",
    name: "Shreyas Rai",
    role: "Managing Partner", 
    location: "India",
    experience: "Focused on sourcing and supplier relations in India, Shreyas excels in on-the-ground collaboration with producers, championing sustainable practices and strengthening our direct supply chain. His people skills and logistics expertise are key to our operational success.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/team%20images/SR(exora).png"
  },
  {
    id: "tm_harshil",
    name: "Harshil Shetty",
    role: "Managing Partner", 
    location: "Australia",
    experience: "Leading client relationship development in Australia, Harshil applies his extensive coffee expertise, from farming to coffee board involvement, to forge robust partnerships. He is passionate about leveraging technology to introduce Indian coffee to global markets.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/team%20images/HS(exora).png"
  },
  {
    id: "tm_hemanth",
    name: "Hemanth Muthana",
    role: "Managing Partner", 
    location: "Denmark",
    experience: "Based in Denmark, Hemanth is a true coffee connoisseur, representing Exora in European markets. His profound understanding of the coffee value chain ensures our European clients receive exceptional service and tailored product solutions.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/team%20images/MP(Exora).png"
  },
  {
    id: "tm_prashanth",
    name: "Prashanth",
    role: "Business Development Manager", 
    location: "Saudi Arabia",
    experience: "As our Business Development Manager in Saudi Arabia, Prashanth drives market growth and establishes key partnerships, connecting clients in the Middle East with Exora Traders' premium Indian agricultural offerings.",
    imageUrl: "https://storage.googleapis.com/exoratraders-images/team%20images/Prashant(exora).png"
  }
];

export const EXCHANGE_RATES_TO_INR: ExchangeRates = {
  [Currency.INR]: 1,
  [Currency.USD]: 83.50, // 1 USD = 83.50 INR
  [Currency.EUR]: 90.20, // 1 EUR = 90.20 INR
  [Currency.GBP]: 105.80, // 1 GBP = 105.80 INR
  [Currency.JPY]: 0.53, // 1 JPY = 0.53 INR
};

export const CURRENCIES_AVAILABLE: Currency[] = [Currency.INR, Currency.USD, Currency.EUR, Currency.GBP, Currency.JPY];

export const CONTACT_EMAIL = "sales@exoratraders.com";

export const HERO_YOUTUBE_VIDEO_ID = "mD6kvPkqPyE";
export const PRODUCTS_PAGE_YOUTUBE_VIDEO_ID = "ayy1lulUmOs";

export const SPICES_DATA: Spice[] = [
  {
    id: "spice_black_pepper",
    name: "Black Pepper",
    botanicalName: "Piper nigrum",
    description: "Known as the 'King of Spices', Indian black pepper is celebrated for its strong aroma, pungent flavor, and high piperine content. Sourced from the Malabar coast.",
    origin: "Kerala, India",
    formsAvailable: ["Whole Berries", "Ground Powder", "Cracked"],
    gradesAvailable: ["MG1 (Malabar Garbled Grade 1)", "TGEB (Tellicherry Garbled Extra Bold)", "TGSEB (Tellicherry Garbled Special Extra Bold)"],
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Pepper.png",
    aromaProfile: "Pungent, woody, slightly floral",
    culinaryUses: "Versatile seasoning for savory dishes, sauces, and marinades."
  },
  {
    id: "spice_cardamom",
    name: "Green Cardamom",
    botanicalName: "Elettaria cardamomum",
    description: "Indian green cardamom, or 'Choti Elaichi', is prized for its intense, sweet-spicy aroma and flavor. Ideal for both sweet and savory applications.",
    origin: "Western Ghats, India",
    formsAvailable: ["Whole Pods", "Seeds", "Ground Powder"],
    gradesAvailable: ["AGEB (Alleppey Green Extra Bold)", "AGB (Alleppey Green Bold)", "AGS (Alleppey Green Superior)"],
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Green%20Cradamom.png",
    aromaProfile: "Sweet, minty, spicy, citrusy",
    culinaryUses: "Flavoring for desserts, beverages (chai), rice dishes, and spice blends like Garam Masala."
  },
  {
    id: "spice_turmeric",
    name: "Turmeric",
    botanicalName: "Curcuma longa",
    description: "Indian turmeric is renowned for its vibrant golden-yellow color, earthy aroma, and high curcumin content, known for its health benefits. We offer varieties like Alleppey and Madras.",
    origin: "Various regions including Tamil Nadu, Andhra Pradesh, Maharashtra",
    formsAvailable: ["Whole Fingers", "Bulbs", "Ground Powder"],
    gradesAvailable: ["FAQ (Fair Average Quality)", "Good Grade", "Europe Grade"],
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Turmeric.png",
    aromaProfile: "Earthy, musky, slightly peppery",
    culinaryUses: "Essential for curries, stews, rice dishes, natural food coloring, and health supplements."
  },
  {
    id: "spice_cloves",
    name: "Cloves",
    botanicalName: "Syzygium aromaticum",
    description: "Indian cloves are aromatic flower buds known for their intense, sweet, and pungent flavor. Sourced from regions with optimal tropical climates.",
    origin: "Kerala, Tamil Nadu, Karnataka",
    formsAvailable: ["Whole Buds", "Ground Powder"],
    gradesAvailable: ["Hand-picked Select", "Grade 1"],
    imageUrl: "https://storage.googleapis.com/exoratraders-images/Product%20images/Cloves.png",
    aromaProfile: "Sweet, spicy, warm, slightly bitter",
    culinaryUses: "Spice blends, meats, baked goods, beverages, and traditional medicine."
  }
];


export const CAREERS_AREAS_OF_INTEREST = [
  "Commodity Trading",
  "Sales",
  "Marketing",
  "Administration",
  "Logistics & Supply Chain",
  "Quality Assurance",
  "Finance & Accounting",
  "IT & Technology",
  "Other"
];
