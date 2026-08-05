import cotton from "@/assets/categories/cotton.jpg";
import silk from "@/assets/categories/silk.jpg";
import denim from "@/assets/categories/denim.jpg";
import linen from "@/assets/categories/linen.jpg";
import wool from "@/assets/categories/wool.jpg";
import polyester from "@/assets/categories/polyester.jpg";

const categories = [
  {
    id: 1,
    name: "Cotton",
    description: "Soft & breathable fabrics",
    products: 1240,
    suppliers: 210,
    image: cotton,
  },
  {
    id: 2,
    name: "Silk",
    description: "Luxury premium fabrics",
    products: 520,
    suppliers: 95,
    image: silk,
  },
  {
    id: 3,
    name: "Denim",
    description: "Durable fashion fabrics",
    products: 740,
    suppliers: 130,
    image: denim,
  },
  {
    id: 4,
    name: "Linen",
    description: "Natural summer fabrics",
    products: 680,
    suppliers: 110,
    image: linen,
  },
  {
    id: 5,
    name: "Wool",
    description: "Warm winter fabrics",
    products: 430,
    suppliers: 80,
    image: wool,
  },
  {
    id: 6,
    name: "Polyester",
    description: "Industrial textiles",
    products: 1560,
    suppliers: 260,
    image: polyester,
  },
];

export default categories;