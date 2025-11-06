const navLinks = [
 {
	id: "lenses",
	title: "Visions",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "Shades",
 },
 {
	id: "contact",
	title: "Contact",
 },
];
const services = [
  {
    name: "Comprehensive Eye Examination",
    detail: "Computerized vision testing and prescription consultation.",
    price: "Starting at ₹499",
  },
  {
    name: "Lens Replacement / Lens Fitting",
    detail: "Precision alignment and high-accuracy fitting for lasting comfort.",
    price: "Starting at ₹799",
  },
  {
    name: "Frame Repair / Alignment",
    detail: "Professional restoration for durability and comfort.",
    price: "Starting at ₹399",
  },
  {
    name: "Contact Lens Trial / Care",
    detail: "Trial fitting, consultation, and hygiene guidance.",
    price: "Starting at ₹999",
  },
];

const collections = [
  {
    name: "BlueGuard™ Digital Lenses",
    detail: "Anti-glare & anti-fatigue protection for modern digital lifestyles.",
  },
  {
    name: "Photochromic Smart Lenses",
    detail: "Adaptive tint technology for sunlight and indoor balance.",
  },
  {
    name: "High-Definition Progressive Lenses",
    detail: "Seamless clarity across near, mid, and far distances.",
  },
  {
    name: "Signature Designer Frames",
    detail: "Luxury acetate and titanium craftsmanship for refined style.",
  },
];


const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
  "Advanced anti-glare and UV protection lenses",
  "Digitally optimized progressive designs",
  "Precision edge-cutting for flawless alignment",
  "Blue-light filtering for digital screen protection",
];

const goodLists = [
  "Comprehensive eye health assessments",
  "Computerized vision testing and diagnostics",
  "Exclusive designer frames curated for comfort and style",
 "Expert lens fitting and frame adjustments",
];



const storeInfo = {
  heading: "Where to Find Us",
  address:
    "Shop No 1, Samadhan Building, 759/35, Bhandarkar Rd, near Oakwood Hotel, Deccan Gymkhana, Pune, Maharashtra 411004",
  location: "Baker’s Basket Complex, Deccan Gymkhana",
  contact: {
    phone: "093722 24060",
    email: "contact@eyevisionoptics.in",
  },
};

const openingHours = [
  { day: "Mon – Fri", time: "10:00am – 9:00pm" },
  { day: "Saturday", time: "10:00am – 9:00pm" },
  { day: "Sunday", time: "10:00am – 6:00pm" },
];

const socials = [
  {
    name: "Instagram",
    icon: "/images/insta.png",
    url: "https://www.instagram.com/eyevisionoptics",
  },
  {
    name: "Facebook",
    icon: "/images/fb.png",
    url: "https://www.facebook.com/eyevisionoptics",
  },

];

export { storeInfo, openingHours, socials };




const allLenses = [
  {
    id: 1,
    name: "Aviator Classics",
    variants: [
      {
        name: "Gold Frame Polarized",
        title: "Iconic Golden Edge",
        description:
          "Timeless gold aviators with polarized lenses for maximum glare reduction — perfect for everyday wear and travel.",
        image: "/images/lenses/avaitor2.png",
      },
      {
        name: "Silver Mirror",
        title: "Refined Metallic Finish",
        description:
          "A sleek silver mirror variant offering crisp reflection and modern edge without sacrificing comfort.",
        image: "/images/lenses/avaitor3.png",
      },
      {
        name: "Matte Black",
        title: "Subtle Power, Sleek Look",
        description:
          "Classic matte black aviators — understated sophistication for confident personalities.",
        image: "/images/lenses/avaitor1.png",
      },
    ],
  },
  {
    id: 2,
    name: "Wayfarer Edge",
    variants: [
      {
        name: "Gloss Black",
        title: "Bold Everyday Icon",
        description:
          "Glossy black acetate frames that define versatility and everyday style for any outfit.",
        image: "/images/lenses/wayfarer-black.png",
      },
      {
        name: "Tortoise Shell",
        title: "Retro Warmth, Modern Edge",
        description:
          "The timeless tortoise pattern reborn — elegant warmth paired with durable hinges.",
        image: "/images/lenses/wayfarer-tortoise.png",
      },
      {
        name: "Frost Clear",
        title: "Minimal Transparency",
        description:
          "Transparent frames offering a crisp, minimalist look that blends effortlessly with any attire.",
        image: "/images/lenses/wayfarer-clear.png",
      },
    ],
  },
  {
    id: 3,
    name: "Rimless Visionaire",
    variants: [
      {
        name: "Titanium Silver",
        title: "Light as Air",
        description:
          "Rimless titanium silver frames designed for ultra-light comfort and professional appeal.",
        image: "/images/lenses/rimless-gray.png",
      },
      {
        name: "Rose Gold",
        title: "Elegant Transparency",
        description:
          "Rose gold accents and near-invisible edges — minimalist design meets timeless beauty.",
        image: "/images/lenses/rimless-gold.png",
      },
    ],
  },
  {
    id: 4,
    name: "Round RetroCurve",
    variants: [
      {
        name: "Wood Grain",
        title: "Organic Craft Aesthetic",
        description:
          "Eco-inspired wood finish frames crafted for creative individuals who love timeless shapes.",
        image: "/images/lenses/round-wood.png",
      },
      {
        name: "Matte Olive",
        title: "Earthy Modern Expression",
        description:
          "Subtle greenish tones for those who prefer understated yet expressive fashion.",
        image: "/images/lenses/round-olive.png",
      },
      {
        name: "Gloss Amber",
        title: "Retro Shine Reimagined",
        description:
          "Warm amber-toned finish delivering a perfect mix of retro and contemporary feel.",
        image: "/images/lenses/round-amber.png",
      },
    ],
  },
];





export {
 navLinks,
 allLenses,
collections,
 services,
 profileLists,
 featureLists,
 goodLists,

};