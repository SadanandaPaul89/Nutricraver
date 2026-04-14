export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export type Restaurant = {
  id: string;
  name: string;
  area: string;
  etaMins: number;
  rating: number;
  cuisines: string[];
  menu: MenuItem[];
};

type RestaurantListProps = {
  restaurants: Restaurant[];
  onAddToCart: (item: MenuItem, restaurant: Restaurant) => void;
};

const RESTAURANT_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA46l6TnybQ12J0KsprkkhZU4mww120xbN3ITrCXOZAdApyUE60WmJAdGR2wjfz1Ud_g0mjYptFfcRI_xtziPzRnYIFlZLegrAiXPQAcBIOXpiLrQwFVlH8OxnY-X8t0YzNHDkl--7AY5jhgddrDfXV4gGZyD0lATL9Xel12wpScakVSMyvBhpqu3vxyo57jnU31cQfFFQ99lHPyKznFNZ2fhGwSrhwxUYBFQuYhCQ8-e8qoG_5Qw9PF-3jLuTcUDre-7Nm1MNGSHe6",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-8R7ACYC_U1DCGmXPn2U6vqvb4-2aSv3wscBT878TGDtis7XHzKwE15FjX8EPzoHS7CcEno_4k7fGNwui4qlA3HZaJSz-52gJFDyhAVNkArBenoxRb6BJo8OmGOlPZ23-srF_FlgaEYTSvTSVuNg8T2qEvfwbOBdn3WeCmtK-9ar0JtEN27se4Gghj3pvpEaR_5RIwv3zvmOypUbSrGhBWDtieMm1R2bXk2-eUhbcBQoYWUaVsuZSlkPsBUy32RAGSyDQskBJFvgf",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKixY2QdBf82hXE1C7gvzoRao82VfjNBU6NXVxnU5yrW_WycrjuhNQCWdKg-Qt3VavoZfeKPCb8_zS3c5_XrUAn5y2FsIR-46lxtgY6XyG_VBUHgbIxymnWmMgbbeM5yK8cyzI5i69WVTk2k_LOVuQdLBEt6BWfr4PUho5Kj1D8N03wwoRcBFarj92BEl0q9pDoSUIsLEkT3zk2E0w-htXMZ_LJzCAbpwkre5VyHpDB3PpYpwSB2BtvnQQzxcrXVn6f1QpI57WjHpc",
];

export default function RestaurantList({ restaurants, onAddToCart }: RestaurantListProps) {
  return (
    <section className="py-12 bg-surface-container-low px-8 w-full h-full">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-secondary font-sans uppercase tracking-[0.3em] text-xs mb-2 block">
            Curated Selections
          </span>
          <h2 className="text-4xl text-primary font-bold tracking-tight">Today's Featured Ateliers</h2>
        </div>
        <a
          className="text-primary font-sans text-xs uppercase tracking-widest border-b border-primary/20 pb-1 hover:border-primary transition-all hidden sm:block"
          href="#"
        >
          View All Destinations
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {restaurants.map((restaurant, idx) => (
          <div key={restaurant.id} className="group cursor-pointer flex flex-col h-full bg-surface-container-lowest editorial-shadow">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={RESTAURANT_IMAGES[idx % RESTAURANT_IMAGES.length]}
                alt={restaurant.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm px-3 py-1 text-[10px] font-sans uppercase tracking-widest text-primary font-bold">
                {restaurant.rating >= 4.5 ? "Michelin Star" : "Artisan"}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{restaurant.name}</h3>
                  <div className="flex items-center gap-4 text-stone-500 text-xs font-sans tracking-wide">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">schedule</span> {restaurant.etaMins} min
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">location_on</span> {restaurant.area}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-secondary-fixed/30 px-2 py-1">
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="text-xs font-bold text-secondary">{restaurant.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {restaurant.cuisines.map((cuisine) => (
                  <span key={cuisine} className="text-[10px] uppercase tracking-widest text-secondary border border-secondary/20 px-2 py-0.5">
                    {cuisine}
                  </span>
                ))}
              </div>

              {/* Menu items adapted to luxurious layout */}
              <div className="mt-auto border-t border-surface-container pt-4 flex flex-col gap-4">
                {restaurant.menu.map((item) => (
                  <div key={item.id} className="flex justify-between items-start group/item">
                    <div className="pr-4">
                      <h4 className="font-body font-bold text-sm text-primary tracking-tight transition-colors group-hover/item:text-secondary">{item.name}</h4>
                      <p className="text-stone-500 text-xs font-light leading-snug mt-1 line-clamp-2">{item.description}</p>
                      <div className="mt-2 font-serif text-sm italic text-secondary">Rs {item.price}</div>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(item, restaurant);
                      }}
                      className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-on-primary transition-all rounded-sm"
                      title="Add to Selection"
                    >
                      <span className="material-symbols-outlined text-lg">add</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
