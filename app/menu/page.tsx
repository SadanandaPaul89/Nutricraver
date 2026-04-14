import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const MENU_CATEGORIES = [
  {
    title: "Comfort Picks",
    items: ["Butter Chicken Bowl", "Millet Khichdi Combo", "Paneer Tikka Wrap"],
  },
  {
    title: "Healthy Add-ons",
    items: ["Chickpea Kachumber", "Tandoori Broccoli", "Sprout Chaat Cup"],
  },
  {
    title: "Protein Rich",
    items: ["High Protein Chicken Bowl", "Tofu Quinoa Crunch", "Greek Yogurt Herb Dip"],
  },
];

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-1 max-w-screen-2xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <section className="mb-16 border-l-4 border-secondary pl-6 md:pl-10">
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-secondary font-bold">Menu</p>
          <h1 className="mt-2 text-4xl font-serif italic text-primary">Explore Curated Dishes</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 font-body">
            Pick signature meals and add nutrient-friendly sides from our category-first curation.
          </p>
        </section>

        <section className="grid gap-12 md:grid-cols-3">
          {MENU_CATEGORIES.map((category) => (
            <article key={category.title} className="bg-surface-container-low p-8 editorial-shadow">
              <h2 className="text-xl font-serif text-primary border-b border-surface-container pb-4">{category.title}</h2>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm font-body text-stone-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
