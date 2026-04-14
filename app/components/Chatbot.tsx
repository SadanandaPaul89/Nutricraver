export type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

type ChatbotProps = {
  messages: ChatMessage[];
  draft: string;
  onDraftChange: (value: string) => void;
  onSend: () => void;
  sending?: boolean;
  locationLabel: string;
  onLocationLabelChange: (value: string) => void;
  latitude: string;
  onLatitudeChange: (value: string) => void;
  longitude: string;
  onLongitudeChange: (value: string) => void;
};

export default function Chatbot({
  messages,
  draft,
  onDraftChange,
  onSend,
  sending = false,
  locationLabel,
  onLocationLabelChange,
  latitude,
  onLatitudeChange,
  longitude,
  onLongitudeChange,
}: ChatbotProps) {
  return (
    <section className="bg-primary text-on-primary p-8 md:p-12 editorial-shadow">
      <span className="text-on-primary-container font-sans uppercase tracking-[0.4em] text-xs mb-4 block">
        AI Wellness Concierge
      </span>
      <h2 className="text-3xl font-serif italic mb-6 leading-tight">Share Your Dietary Needs</h2>
      <p className="text-on-primary-container font-body leading-relaxed mb-8 text-sm opacity-80">
        Beyond delivery, we offer curation. Describe your diet goals, allergies, and location. Our intelligence will learn your biometric needs and propose an optimized selection.
      </p>

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <div className="relative sm:col-span-3">
          <input
            id="locationLabel"
            value={locationLabel}
            onChange={(event) => onLocationLabelChange(event.target.value)}
            className="peer block w-full border-0 border-b border-primary-fixed-dim/30 bg-transparent px-0 py-2.5 text-on-primary focus:ring-0 focus:border-secondary transition-all"
            placeholder=" "
          />
          <label htmlFor="locationLabel" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-on-primary-container/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary">
            Delivery Location
          </label>
        </div>
        <div className="relative">
          <input
            id="latitude"
            value={latitude}
            onChange={(event) => onLatitudeChange(event.target.value)}
            className="peer block w-full border-0 border-b border-primary-fixed-dim/30 bg-transparent px-0 py-2.5 text-on-primary focus:ring-0 focus:border-secondary transition-all"
            placeholder=" "
          />
          <label htmlFor="latitude" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-on-primary-container/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary">Lat</label>
        </div>
        <div className="relative">
          <input
            id="longitude"
            value={longitude}
            onChange={(event) => onLongitudeChange(event.target.value)}
            className="peer block w-full border-0 border-b border-primary-fixed-dim/30 bg-transparent px-0 py-2.5 text-on-primary focus:ring-0 focus:border-secondary transition-all"
            placeholder=" "
          />
          <label htmlFor="longitude" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xs text-on-primary-container/70 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-secondary">Lng</label>
        </div>
      </div>

      <div className="max-h-56 space-y-3 overflow-y-auto pr-2 no-scrollbar mb-6">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`px-4 py-3 text-sm leading-relaxed border-l-2 ${
              message.role === "user" 
                ? "border-secondary bg-surface/10 text-on-primary" 
                : "border-primary-fixed-dim bg-surface-container-lowest/5 text-on-primary"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <input
          value={draft}
          onChange={(event) => onDraftChange(event.target.value)}
          className="flex-grow border-0 border-b border-primary-fixed-dim bg-transparent px-0 py-2 text-on-primary focus:ring-0 focus:border-secondary text-sm placeholder:text-on-primary-container/50"
          placeholder="I am vegetarian, allergic to peanuts..."
          onKeyDown={(e) => {
            if (e.key === "Enter") onSend();
          }}
        />
        <button
          type="button"
          onClick={onSend}
          disabled={sending || !draft.trim()}
          className="bg-secondary text-on-secondary px-6 py-3 font-sans uppercase tracking-widest text-xs font-bold hover:bg-secondary-fixed transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Analyzing..." : "Submit Needs"}
        </button>
      </div>
    </section>
  );
}
