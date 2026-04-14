export default function Footer() {
  return (
    <footer className="bg-[#f4f4f2] w-full py-16 px-8 mt-12 border-t border-surface-container">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-serif italic text-xl text-primary block">NutriCraver</span>
          <p className="text-stone-500 font-sans text-[11px] tracking-normal mt-2 max-w-md">
            A Culinary Curation for the discerning palate. Sourced from heritage farms and master artisans.
          </p>
        </div>
        <p className="text-stone-400 font-sans text-[10px] uppercase tracking-widest">
          © 2024 NutriCraver Editorial.
        </p>
      </div>
    </footer>
  );
}
