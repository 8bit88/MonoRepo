import Image from "next/image";
import {
  Home,
  BookOpen,
  ClipboardList,
  Calendar,
  Clock,
  CreditCard,
  Utensils,
} from "lucide-react";
import logoImg from "../../public/logo.png"; // або інший шлях

const navItems = [
  { icon: <Home />, text: "Головна", link: "/home" },
  { icon: <BookOpen />, text: "Оцінки", link: "/marks" },
  { icon: <ClipboardList />, text: "Завдання", link: "/tasks" },
  { icon: <Calendar />, text: "Розклад", link: "/timetable" },
  { icon: <Clock />, text: "Відвідуваність", link: "/attendance" },
  { icon: <CreditCard />, text: "Оплата", link: "/payment" },
  { icon: <Utensils />, text: "Меню", link: "/menu" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 shadow-lg">
      <nav className="flex flex-col space-y-10">
        <div className="flex justify-center mb-6">
          <Image src={logoImg} alt="Logo" width={280} height={150} />

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center space-x-3 text-gray-800 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-100 transition"
            >
              <div>
                {item.icon} {item.text}
              </div>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}
