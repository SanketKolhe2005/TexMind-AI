import categories from "@/data/categories";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Browse Categories
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Explore premium textile categories powered by AI recommendations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {categories.map((item) => (
            <CategoryCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}