import {
  ShoppingBag,
  Heart,
  Clock3,
  CheckCircle,
} from "lucide-react";

const cards = [
  {
    title: "Total Orders",
    value: "24",
    icon: ShoppingBag,
    color: "bg-blue-500",
  },
  {
    title: "Wishlist",
    value: "12",
    icon: Heart,
    color: "bg-pink-500",
  },
  {
    title: "Pending",
    value: "5",
    icon: Clock3,
    color: "bg-orange-500",
  },
  {
    title: "Completed",
    value: "19",
    icon: CheckCircle,
    color: "bg-emerald-500",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="bg-white rounded-3xl shadow p-6 flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500">{card.title}</p>

              <h2 className="text-4xl font-bold mt-2">
                {card.value}
              </h2>
            </div>

            <div
              className={`${card.color} p-4 rounded-2xl text-white`}
            >
              <Icon size={32} />
            </div>
          </div>
        );
      })}
    </div>
  );
}