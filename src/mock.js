// ====== MOCK DATA for PK Fitness Centre clone (frontend-only) ======
// Replace any of these with real content later.

export const BRAND = {
  name: "PK FITNESS",
  nameFull: "PK Fitness Centre",
  phone: "+919999999999",
  whatsapp: "https://wa.me/919999999999",
  tagline: "Sculpt Your Body. Elevate Your Spirit.",
};

export const SOCIALS = {
  google: "https://www.google.com/search?q=PK+FITNESS+CENTRE",
  maps: "https://maps.app.goo.gl/wtcPttXZYWiyATNUA",
  instagram: "https://www.instagram.com/pkfitnesscentre/",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

// Floating stat badges on hero. ICON names from lucide-react in comments.
export const HERO_STATS = [
  { icon: "Clock", value: "1.5", unit: "Hours", label: "Per Session" }, // lucide: Clock
  { icon: "Flame", value: "850", unit: "Kcal", label: "Avg Burn" }, // lucide: Flame
  { icon: "PersonStanding", value: "24", unit: "Poses", label: "Mobility" }, // lucide: PersonStanding
  { icon: "Dumbbell", value: "12", unit: "Sets", label: "Strength" }, // lucide: Dumbbell
];

export const INSPIRE_POINTS = [
  { icon: "Target", title: "Goal-Driven Plans", desc: "Programs built around your personal targets." },
  { icon: "HeartPulse", title: "Health First", desc: "Balanced training that protects your body." },
  { icon: "TrendingUp", title: "Measurable Progress", desc: "Track every rep, set and milestone." },
  { icon: "Users", title: "Community Energy", desc: "Train with people who push you higher." },
];

export const FEATURES = [
  { icon: "Dumbbell", title: "Modern Equipment", desc: "Premium machines & free weights kept in top condition.", highlight: false },
  { icon: "UserCheck", title: "Expert Coaching", desc: "Certified trainers guiding every step of your journey.", highlight: true },
  { icon: "CalendarClock", title: "Flexible Timings", desc: "Open early to late so training fits your life.", highlight: false },
  { icon: "Sparkles", title: "Clean & Hygienic", desc: "A spotless, motivating space to perform your best.", highlight: false },
];

export const PROGRAMS = [
  { title: "Strength Building", tag: "Build Power", img: "https://images.unsplash.com/photo-1613845205719-8c87760ab728", stats: { left: { v: "12", u: "Sets" }, right: { v: "1.5", u: "Hours" } } },
  { title: "Hypertrophy", tag: "Grow Muscle", img: "https://images.unsplash.com/photo-1614367674345-f414b2be3e5b", stats: { left: { v: "16", u: "Sets" }, right: { v: "920", u: "Kcal" } } },
  { title: "Fat Burn HIIT", tag: "Lean Out", img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26", stats: { left: { v: "1100", u: "Kcal" }, right: { v: "45", u: "Min" } } },
  { title: "Powerlifting", tag: "Max Lift", img: "https://images.unsplash.com/photo-1547919307-1ecb10702e6f", stats: { left: { v: "8", u: "Sets" }, right: { v: "2", u: "Hours" } } },
  { title: "Mobility & Flow", tag: "Move Free", img: "https://images.unsplash.com/photo-1585484764802-387ea30e8432", stats: { left: { v: "24", u: "Poses" }, right: { v: "40", u: "Min" } } },
  { title: "Classic Physique", tag: "Sculpt", img: "https://images.unsplash.com/photo-1601113329251-0aebe217bdbe", stats: { left: { v: "14", u: "Sets" }, right: { v: "780", u: "Kcal" } } },
];

export const EXPERIENCE = [
  {
    title: "Personal Training",
    desc: "One-on-one coaching tailored to your body, pace and goals for the fastest results.",
    img: "https://images.unsplash.com/photo-1628884879718-60dd217d5c9b",
    badge: { value: "98", unit: "% Goal Hit" },
  },
  {
    title: "Group Energy",
    desc: "High-energy group sessions that keep you accountable, motivated and consistent.",
    img: "https://images.unsplash.com/photo-1610312856669-2cee66b2949c",
    badge: { value: "500", unit: "+ Members" },
  },
];

export const TRAINERS = [
  { name: "Pranav K.", role: "Head Coach \u00b7 Strength", img: "https://images.unsplash.com/photo-1549476464-37392f717541", exp: "10+ yrs" },
  { name: "Rohan M.", role: "Hypertrophy Specialist", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e", exp: "8 yrs" },
  { name: "Aisha R.", role: "HIIT & Mobility Coach", img: "https://images.unsplash.com/photo-1649888317149-05d953c9fef8", exp: "6 yrs" },
];

export const TESTIMONIALS = [
  { name: "Karan S.", result: "Lost 14 kg", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110", quote: "PK Fitness changed my routine completely. The coaches genuinely care and the results speak for themselves." },
  { name: "Meera T.", result: "Gained Strength", img: "https://images.pexels.com/photos/2105493/pexels-photo-2105493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", quote: "Best gym environment I've trained in. Clean, motivating and the trainers push you the right way." },
  { name: "Arjun V.", result: "Body Recomposition", img: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00", quote: "From skinny to strong in months. The structured programs and community kept me consistent every single week." },
];

export const STATS_STRIP = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Expert Trainers" },
  { value: "30+", label: "Weekly Classes" },
  { value: "10", label: "Years Strong" },
];
