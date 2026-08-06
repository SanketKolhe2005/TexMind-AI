import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${item.name}`);
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all">

        {/* Image */}

        <div
          onClick={handleClick}
          className="overflow-hidden cursor-pointer"
        >
          <img
            src={item.image}
            alt={item.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/800x600?text=No+Image";
            }}
            className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}

        <div className="p-7">

          <h2 className="text-4xl font-bold text-slate-900">
            {item.name}
          </h2>

          <p className="mt-3 text-gray-500 leading-7">
            {item.description}
          </p>

          <button
            onClick={handleClick}
            className="mt-8 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3 rounded-xl font-semibold transition-all"
          >
            Explore Category
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}
