import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ item }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        onClick={() => navigate(`/category/${item.name}`)}
        className="cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      >
        <img
  src={item.image}
  alt={item.name}
  className="h-72 w-full object-cover"
  onLoad={() => console.log("✅ Loaded:", item.image)}
  onError={(e) => {
    console.log("❌ Failed:", item.image);
    e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
  }}
/>

        <div className="p-6">

          <h2 className="text-3xl font-bold text-red-600">
  TEST - {item.name}
</h2>

          <p className="text-gray-500 mt-3">
            {item.description}
          </p>

          <button
            className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl"
          >
            Explore Category
          </button>

        </div>
      </Card>
    </motion.div>
  );
}
