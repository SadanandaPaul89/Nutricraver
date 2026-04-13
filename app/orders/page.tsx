import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const ORDERS = [
  {
    id: "ORD-1029",
    date: "12 Apr 2026",
    status: "Delivered",
    total: 578,
    items: "Butter Chicken Bowl, Chickpea Kachumber",
  },
  {
    id: "ORD-1024",
    date: "10 Apr 2026",
    status: "Delivered",
    total: 349,
    items: "High Protein Chicken Bowl",
  },
  {
    id: "ORD-1017",
    date: "06 Apr 2026",
    status: "Cancelled",
    total: 239,
    items: "Paneer Tikka Wrap",
  },
];

export default function OrdersPage() {
  return (
    <>
      <Navbar />
      <main className="w-full flex-1 max-w-screen-2xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <section className="mb-16 border-l-4 border-secondary pl-6 md:pl-10">
          <p className="text-[10px] font-sans uppercase tracking-[0.2em] text-secondary font-bold">Order History</p>
          <h1 className="mt-2 text-4xl font-serif italic text-primary">Your Culinary Journey</h1>
        </section>

        <section className="max-w-4xl grid gap-6">
          {ORDERS.map((order) => (
            <article key={order.id} className="bg-surface-container-low p-6 editorial-shadow flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <p className="text-lg font-serif text-primary">{order.id}</p>
                  <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-1 ${order.status === "Delivered" ? "bg-primary-fixed-dim/30 text-primary" : "bg-error-container text-error"}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-stone-700 font-body">{order.items}</p>
              </div>
              <div className="sm:text-right sm:min-w-[120px] mt-2 sm:mt-0">
                <p className="font-serif italic text-secondary text-lg">Rs {order.total}</p>
                <p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">{order.date}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
