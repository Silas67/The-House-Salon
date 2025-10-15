import { GiBarbarian, GiDiamondHard, GiTeamUpgrade } from "react-icons/gi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoMdPerson } from "react-icons/io";
import { PiHouse } from "react-icons/pi";

export const Navbar = [
  { href: "/about", label: "About" },
  { href: "/services", label: "What We Do" },
  { href: "/media", label: "Media" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export const IMGS = [
  {
    icon: <GiBarbarian />,
    title: "Hairy Affairs",
    Description:
      "Every hair styling at Groomed by Elereka pushes the right cut to suit you, leaving your hair and scalp cleansed.",
  },
  {
    icon: <GiBarbarian />,
    title: "Chemical Services",
    Description:
      "Let our expert Colorist transform your hair or beard using the fantastic coloring products from.",
  },
  {
    icon: <GiBarbarian />,
    title: "Treatments",
    Description:
      "Groomed by Elereka specializes in offering luxury treatments.",
  },
  {
    icon: <GiBarbarian />,
    title: "Specialist",
    Description:
      "Not only are we amongst the very best at what we do, but you’ll also find that our prices are unusually refreshing.",
  },
  {
    icon: <GiBarbarian />,
    title: "Babarian Hair",
    Description:
      "Every hair styling at Groomed by Elereka pushes the right cut to suit you, leaving your hair and scalp cleansed.",
  },
  {
    icon: <GiBarbarian />,
    title: "Babarian Hair",
    Description:
      "Every hair styling at Groomed by Elereka pushes the right cut to suit you, leaving your hair and scalp cleansed.",
  },
  {
    icon: <GiBarbarian />,
    title: "Babarian Hair",
    Description:
      "Every hair styling at Groomed by Elereka pushes the right cut to suit you, leaving your hair and scalp cleansed.",
  },
];

export const testimonials = [
  {
    name: "Jordan Mensah",
    job: "Client",
    word: "Getting a cut at The House is more than just grooming — it’s an experience. From the warm welcome to the attention to detail, every visit feels premium. The barber understood exactly what I wanted and elevated it. I always leave looking sharp and feeling refreshed.",
  },
  {
    name: "Yvonne Adigun",
    job: "Client",
    word: "The team at The House Salon truly understands style and precision. My natural hair treatment was handled with such care, and the results were flawless. The ambiance, professionalism, and creativity set them apart. Definitely my go-to salon from now on.",
  },
  {
    name: "Adama & Walid",
    job: "Clients",
    word: "We were both impressed by the professionalism and calm atmosphere. The barbers are skilled, patient, and focused. Every session feels intentional — from the consultation to the finish. You can tell they take pride in every detail of their craft.",
  },
  {
    name: "Kendra Obasi",
    job: "Client",
    word: "I’ve tried many salons before, but The House has something special — a perfect balance of luxury and comfort. The stylist took time to understand what suited my face shape and personality. I left with a clean fade and a big smile. Highly recommend!",
  },
  {
    name: "Sacha & Whitney",
    job: "Clients",
    word: "A wonderful experience from start to finish. We booked a couple’s grooming session, and the staff made it smooth, stylish, and relaxing. The environment is warm and modern, and the results speak for themselves — crisp, confident, and classy.",
  },
  {
    name: "Timi Adewale",
    job: "Client",
    word: "I booked a beard trim and facial, and I can confidently say it was worth every naira. The service is top-notch, the tools are spotless, and the atmosphere is calm. You can tell these guys love what they do. I’ll definitely be back soon.",
  },
  {
    name: "Alex Hacille",
    job: "Client",
    word: "What stood out for me was the consistency. Every time I visit The House, I get the same high level of precision and care. The team doesn’t rush — they perfect. It’s rare to find that kind of standard in grooming these days.",
  },
  {
    name: "Babajide D.",
    job: "Client",
    word: "I used to think all barbershops were the same — until I walked into The House. The professionalism, hygiene, and skill level are unmatched. They turned a simple haircut into an art form. Definitely the best in town.",
  },
  {
    name: "Mariam Yusuf",
    job: "Client",
    word: "From booking to the final look, everything was seamless. The staff made me feel comfortable, and the result was stunning. You can tell this place was built for people who value quality and a personal touch. 10/10 service.",
  },
];

export const Btns = [
  { icon: <FaFacebook /> },
  { icon: <FaInstagram /> },
  { icon: <FaTwitter /> },
  { icon: <FiMail /> },
  { icon: <FaLinkedin /> },
];

export const footerLinks = [
  {
    heading: "Quick Links",
    link: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    heading: "Company",
    link: [
      { name: "Our Story", href: "/about" },
      { name: "Our Products", href: "/shop" },
      { name: "Blog", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
    ],
  },

  {
    heading: "Support",
    link: [
      { name: "Help Center", href: "/contact" },
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/contact" },
    ],
  },
];

export const Products = [
  {
    img: "/assets/products/img1.jpg",
    product: "Crew Clipper Set",
    subtitle: "Comes with cooking pot",
    price: "N10000",
  },
  {
    img: "/assets/products/img2.jpg",
    product: "Rezuel Shaving Cream",
    subtitle: "Comes with cooking pot",
    price: "N12000",
  },
  {
    img: "/assets/products/img3.jpg",
    product: "Beard Serum",
    subtitle: "Comes with cooking pot and spoons",
    price: "N20000",
  },
  {
    img: "/assets/products/img4.jpg",
    product: "Complete Clipper set",
    subtitle: "Comes with cooking pot",
    price: "N22000",
  },
];

export const achievementsList2 = [
  { prefix: <IoMdPerson />, value: "150", postfix: "+", metric: "Clients" },
  {
    prefix: <GiDiamondHard />,
    value: "3",
    postfix: "+",
    metric: "Years Of Experience",
  },
  {
    prefix: <GiTeamUpgrade />,
    value: "20",
    postfix: "+",
    metric: "Team Members",
  },
  {
    prefix: <PiHouse />,
    value: "20",
    postfix: "+",
    metric: "Branches",
  },
];

export const HairyAffairs = [
  {
    section: "Hairy Affairs",
    menuItems: [
      { name: "Barbing and Black Dye", price: "N3,500" },
      { name: "Children", price: "N8000" },
      { name: "Low Cut", price: "N2000" },
      { name: "Fade", price: "N2000" },
      { name: "Lining", price: "N1000" },
      { name: "Skin", price: "N2000" },
      { name: "Shaving and Jaw Cleansing", price: "N2000" },
      { name: "Waves", price: "N4000" },
      { name: "Afro", price: "N1,500" },
      { name: "Flat Top", price: "N2,500" },
    ],
    image: "/assets/img4.jpg",
  },
];

export const ChemicalTreatment = [
  {
    section: "Chemical Treatments",
    menuItems: [
      { name: "Barbing and Color Dye", price: "N6000" },
      { name: "Double Processing Dye/Wash/Conditioning", price: "N10000" },
      { name: "Beard Dye", price: "N6000" },
      { name: "Texturizing Beard", price: "N3000" },
      { name: "Texturizing Hair", price: "N3500" },
    ],
    image: "/assets/img7.jpg",
  },
];

export const Specialist = [
  {
    section: "Specialist",
    menuItems: [
      { name: "DreadLocks", price: "N30,000" },
      { name: "Short Locks", price: "N20,000" },
      { name: "Short Cornrows", price: "N5,000" },
      { name: "Long Cornrows", price: "N7,000" },
      { name: "Bantu Knots", price: "N7,500" },
      { name: "Sponge Twist", price: "N5,000" },
      { name: "Braids", price: "N3,000" },
      { name: "Braids Fade", price: "N3,500" },
      { name: "Shortlocks Fade", price: "N9,000" },
      { name: "Twist", price: "N6,000" },
    ],
    image: "/assets/img2.jpg",
  },
];

export const blogs = [
  {
    title: "The Power of a Fresh Haircut",
    slug: "live-sustainably",
    excerpt:
      "A Haircut does more than change your look, It instantly changes your energy. Walking out of the saloon with sharp edges and a clean style gives you a confidence you can't fake. Whether it's for work, school, or a special event, a fresh cut tells the world you're ready. At our saloon, we don't just cut hair we boost confidence.",
    image: "/assets/blogs/freshhair.jpg",
  },

  {
    title: "Top Men's Haircut Trends Right Now",
    slug: "green-energy",
    excerpt:
      "From low fades to afro Tapers, classic crew cuts to waves, today's trends are bold but clean. The right style depends on your face shape and personality. Some cuts show maturity others highlight creativity but all leaves you looking fresh. Our barbers make sure you always leave with a trend that fits you.",
    image: "/assets/blogs/trendinghairstyles.JPG",
  },

  {
    title: "Beard Gromming: More Than Just A Trim",
    slug: "live-sustainably",
    excerpt:
      "A beard is more than a facial hair, it's a statement. But without proper care, it quickly loses it's charm. With trimming, shaping, and a little beard oil, your look transfroms from rough to refined. Our gromming services keep your beard sharp and stylish no matter your style prefrences",
    image: "/assets/blogs/beardgroom.jpg",
  },

  {
    title: "How To Keep Your Haircut Fresh For Longer",
    slug: "green-energy",
    excerpt:
      "That fresh-from-the-barber look can last longer if you take care of it. Regular brushing, moisturizing, and avoiding harsh products go a long way. The right routine not only keeps your cut sharp but also keeps your hair healthy. We'll guide your on the best way to maintain your style until your next visit.",
    image: "/assets/blogs/longhair.jpg",
  },

  {
    title: "Salon Hygiene: Why It Matters",
    slug: "live-sustainably",
    excerpt:
      "Cleaniness isn't just about appearance, it's about your health. Sterilized clippers, fresh towels and a neat enviroument protect you from infections and create comfort. That's why at our salon, hygiene is as important as the haircut itself",
    image: "/assets/blogs/salon.jpg",
  },

  {
    title: "Hair & Scalp Care Made Simple",
    slug: "green-energy",
    excerpt:
      "Strong hair starts with a healthy scalp. Problems like dandruff or dryness don't just affect your hair, they affect your confidence. Simple habits like washing, oiling, and scalp care can make a big diffrence. At our salon, we share tips and treatments to keep your hair looking it's best",
    image: "/assets/blogs/hairscalp.jpg",
  },

  {
    title: "Hairstyles For Every Occasion",
    slug: "live-sustainably",
    excerpt:
      "Your look should match the moment. A sharp fade for a party, a neat low cut for an interview, or a styled afro for a wedding, every event has a perfect haircut.We help you find the right look for the right time, so you always step out prepared.",
    image: "/assets/blogs/occa.jpg",
  },

  {
    title: "Why Professional Barbers Are Worth It",
    slug: "green-energy",
    excerpt:
      "DIY cuts may look easy, but only a professional barber knows how to blend, shape, and style to perfection. Barbers understand diffrent air textures and face shapes, ensuring you get a look that truly suits you. Choosing a professional barber means choosing precision, and precision is what makes a haircut stand out.",
    image: "/assets/blogs/porbarb.jpg",
  },
];

export const textSlide = {
  initial: { y: 10, opacity: 0 },
  enter: {
    y: 0, // ✅ Use a number, not a string
    opacity: 1,
  },
};

export const items = [
  {
    id: "1",
    img: "./assets/img1.jpg",
    url: "/",
    height: 400,
  },
  {
    id: "2",
    img: "./assets/img2.jpg",
    url: "/",
    height: 250,
  },
  {
    id: "3",
    img: "./assets/img3.jpg",
    url: "/",
    height: 600,
  },
  {
    id: "4",
    img: "./assets/blogs/occa.jpg",
    url: "/",
    height: 300,
  },
  {
    id: "5",
    img: "./assets/img5.jpg",
    url: "/",
    height: 500,
  },
  {
    id: "6",
    img: "/assets/blogs/salon.jpg",
    url: "/",
    height: 400,
  },
  {
    id: "7",
    img: "./assets/img7.jpg",
    url: "/",
    height: 350,
  },
  {
    id: "8",
    img: "./assets/img8.jpg",
    url: "/",
    height: 200,
  },
  {
    id: "9",
    img: "/assets/blogs/longhair.jpg",
    url: "/",
    height: 500,
  },
  {
    id: "10",
    img: "./assets/img5.jpg",
    url: "/",
    height: 350,
  },
  {
    id: "11",
    img: "./assets/blogs/beardgroom.jpg",
    url: "/",
    height: 200,
  },
  {
    id: "12",
    img: "./assets/img3.jpg",
    url: "/",
    height: 500,
  },
  {
    id: "13",
    img: "./assets/img1.jpg",
    url: "/",
    height: 500,
  },
  {
    id: "14",
    img: "./assets/img9.jpg",
    url: "/",
    height: 600,
  },
  {
    id: "15",
    img: "./assets/img2.jpg",
    url: "/",
    height: 400,
  },
  {
    id: "16",
    img: "./assets/img4.jpg",
    url: "/",
    height: 300,
  },
  {
    id: "17",
    img: "./assets/img6.jpg",
    url: "/",
    height: 150,
  },
];
