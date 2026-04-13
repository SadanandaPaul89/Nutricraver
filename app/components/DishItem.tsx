type DishItemProps = {
  name: string;
  rationale: string;
  nutrients: string[];
  onAddToCart?: () => void;
};

export default function DishItem({ name, rationale, nutrients, onAddToCart }: DishItemProps) {
  return (
    <article className="group flex gap-6 items-start bg-transparent py-4 border-b border-surface-container last:border-b-0">
      <div className="flex flex-col justify-between h-full py-1 flex-grow">
        <div>
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-body font-bold text-primary tracking-tight text-lg">{name}</h3>
            <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-2 py-0.5 text-[9px] uppercase tracking-tighter font-semibold">
              Nutrient fit
            </span>
          </div>
          <p className="text-stone-500 text-sm font-light leading-relaxed max-w-sm mt-1">{rationale}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {nutrients.map((nutrient) => (
              <span
                key={nutrient}
                className="text-xs text-primary border-b border-primary/20 pb-0.5"
              >
                {nutrient}
              </span>
            ))}
          </div>
        </div>
        
        {onAddToCart && (
          <button 
            type="button"
            onClick={onAddToCart}
            className="mt-5 self-start flex items-center gap-2 group/btn"
          >
            <span className="w-8 h-8 flex items-center justify-center border border-primary text-primary group-hover/btn:bg-primary group-hover/btn:text-on-primary transition-all">
              <span className="material-symbols-outlined text-lg">add</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary group-hover/btn:text-secondary transition-colors">
              Add to Selection
            </span>
          </button>
        )}
      </div>
    </article>
  );
}
