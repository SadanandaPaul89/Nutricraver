import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-1 max-w-screen-2xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <section className="mb-16 border-l-4 border-secondary pl-6 md:pl-10">
           <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-secondary font-bold">Profile</p>
           <h1 className="mt-2 text-4xl font-serif italic text-primary">Your Sanctuary</h1>
        </section>

        <section className="grid gap-8 lg:grid-cols-2 max-w-5xl">
          <article className="bg-surface-container-low p-8 editorial-shadow flex flex-col justify-between">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-serif text-on-primary">M</div>
              <div>
                <h2 className="text-2xl font-serif text-primary">Max</h2>
                <p className="text-sm text-stone-500 font-sans tracking-wide">max@example.com</p>
              </div>
            </div>
            <div>
              <button type="button" className="text-[10px] font-sans font-bold uppercase tracking-widest border border-primary text-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-all">
                Curate Profile
              </button>
            </div>
          </article>

          <article className="bg-surface-container-low p-8 editorial-shadow">
            <h2 className="text-xl font-serif text-primary border-b border-surface-container pb-4 mb-6">Biometric Preferences</h2>
            <div className="space-y-4 text-sm text-stone-700 font-body">
              <div className="flex justify-between items-center border-b border-surface-container/50 pb-2">
                <span className="text-stone-500 uppercase text-[10px] tracking-widest">Diet Style</span>
                <span className="font-semibold text-primary">High-protein balanced</span>
              </div>
              <div className="flex justify-between items-center border-b border-surface-container/50 pb-2">
                <span className="text-stone-500 uppercase text-[10px] tracking-widest">Allergies</span>
                <span className="font-semibold text-primary">None</span>
              </div>
              <div className="flex justify-between items-center border-b border-surface-container/50 pb-2">
                <span className="text-stone-500 uppercase text-[10px] tracking-widest">Delivery Area</span>
                <span className="font-semibold text-primary">Central Bengaluru</span>
              </div>
              <div className="flex justify-between items-center border-b border-surface-container/50 pb-2">
                <span className="text-stone-500 uppercase text-[10px] tracking-widest">Favorite Cuisine</span>
                <span className="font-semibold text-primary text-right max-w-[200px]">North Indian, healthy bowls</span>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
