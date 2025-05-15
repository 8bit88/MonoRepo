"use client";

import styles from "./home.module.css";
import React from "react";
import Image from 'next/image'
import {
  BookOpen,
  ClipboardList,
  Calendar,
  Clock,
  CreditCard,
  Utensils,
} from "lucide-react";

const navItems = [
  {
    icon: <Calendar size={24} />,
    title: "Розклад",
    description: "Плануйте день легко: коли, де й що — повний розклад занять.",
    link: "/pages/timetable",
  },
  
  {
    icon: <ClipboardList size={24} />,
    title: "Завдання",
    description: "Ніяких забутих домашок! Список завдань завжди під рукою.",
    link: "/pages/tasks",
  },
  {
    icon: <Utensils size={24} />,
    title: "Меню",
    description: "Що сьогодні на обід? Смачно, корисно й завчасно відомо.",
    link: "/pages/menu",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Оцінки",
    description:
      "Успіхи вашої дитини — як на долоні. Всі оцінки в одному місці!",
    link: "/pages/marks",
  },

  {
    icon: <CreditCard size={24} />,
    title: "Оплата",
    description: "Платежі за навчання — зручно, безпечно, без черг.",
    link: "/pages/payment",
  },
];

export default function HomeDashboard() {
  return (
    <>
      <header className={styles.header}>
      <Image
      src="/4.svg"
      alt="Logo"
      width={800}
      height={500}
      className={styles.logo}
    />
       
        <div>
          <h1 className={styles.title}>Електронний щоденник</h1>
          <p className={styles.subtitle}>
            Все для контролю та успіху вашої дитини
          </p>
        </div>
      </header>

      <main className={styles.dashboard}>
        {navItems.map((item, index) => (
          <a key={index} href={item.link} className={styles.tile}>
            {item.icon}
            <span className={styles.tileText}>{item.title}</span>
            <p className={styles.tileDescription}>{item.description}</p>
          </a>
        ))}
      </main>
    </>
  );
}
