import cotton from "@/assets/products/cotton.jpg";
import silk from "@/assets/products/silk.jpg";
import denim from "@/assets/products/denim.jpg";
import linen from "@/assets/products/linen.jpg";
import wool from "@/assets/products/wool.jpg";
import polyester from "@/assets//products/polyester.jpg";

const products = [
  {
    id: 1,
    name: "Premium Cotton Poplin",
    supplier: "Shree Textiles Pvt. Ltd.",
    price: 165,
    moq: 200,
    aiMatch: 96,
    rating: 4.9,
    stock: "12,540 m",
    dispatch: "2 Days",
    image: cotton,
  },

  {
    id: 2,
    name: "Luxury Silk Fabric",
    supplier: "Royal Silk Mills",
    price: 420,
    moq: 50,
    aiMatch: 98,
    rating: 5.0,
    stock: "5,800 m",
    dispatch: "1 Day",
    image: silk,
  },

  {
    id: 3,
    name: "Stretch Denim Fabric",
    supplier: "BlueTex Industries",
    price: 250,
    moq: 300,
    aiMatch: 91,
    rating: 4.8,
    stock: "9,240 m",
    dispatch: "2 Days",
    image: denim,
  },

  {
    id: 4,
    name: "Organic Linen Fabric",
    supplier: "Green Fabrics",
    price: 210,
    moq: 100,
    aiMatch: 93,
    rating: 4.7,
    stock: "8,430 m",
    dispatch: "3 Days",
    image: linen,
  },

  {
    id: 5,
    name: "Premium Wool Fabric",
    supplier: "WinterTex",
    price: 350,
    moq: 150,
    aiMatch: 92,
    rating: 4.8,
    stock: "6,120 m",
    dispatch: "2 Days",
    image: wool,
  },

  {
    id: 6,
    name: "Polyester Blend Fabric",
    supplier: "Modern Fabrics",
    price: 145,
    moq: 250,
    aiMatch: 89,
    rating: 4.6,
    stock: "15,300 m",
    dispatch: "2 Days",
    image: polyester,
  },
];

export default products;