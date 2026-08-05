export default function Stats() {
  const stats = [
    { number: "1500+", label: "Verified Suppliers" },
    { number: "12000+", label: "Premium Fabrics" },
    { number: "45+", label: "Categories" },
    { number: "98%", label: "AI Match Accuracy" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center rounded-2xl bg-slate-50 p-8 shadow-sm hover:shadow-lg transition"
            >
              <h2 className="text-4xl font-bold text-emerald-600">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}