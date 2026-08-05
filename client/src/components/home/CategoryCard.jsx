import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ item }) {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div
        onClick={() => navigate(`/category/${item.name}`)}
        className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all"
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="block w-full h-72 object-cover"
          onError={(e) => {
            e.target.src =
              "https://placehold.co/800x600?text=Image+Not+Found";
          }}
        />

        {/* Content */}
        <div className="p-6">
          <h2 className="text-3xl font-bold">
            {item.name}
          </h2>

          <p className="text-gray-500 mt-3">
            {item.description}
          </p>

          <button
            className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl transition"
          >
            Explore Category
          </button>
        </div>
      </div>
    </motion.div>
  );
}
