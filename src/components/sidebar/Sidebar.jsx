"use client";
import clsx from "clsx";
import styles from "./Sidebar.module.css";
import React from "react";

import {
  BookOpen,
  ClipboardList,
  Calendar,
  CreditCard,
  Utensils,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const navItems = [
  { icon: <BookOpen />, text: "Оцінки", link: "/pages/parent/marks" },
  { icon: <ClipboardList />, text: "Завдання", link: "/pages/parent/tasks" },
  { icon: <Calendar />, text: "Розклад", link: "/pages/parent/timetable" },
  { icon: <CreditCard />, text: "Оплата", link: "/pages/parent/payment" },
  { icon: <Utensils />, text: "Меню", link: "/pages/parent/menu" },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  return (
    <aside
      className={clsx(styles.sidebarContainer, {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <div className={styles.logoContainer}>
        <img src="/3.svg" alt="Logo" className={styles.logoImage} />
      </div>

      <button
        className={styles.toggleButton}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
      </button>

      {navItems.map((item, index) => (
        <a key={index} href={item.link} className={styles.navItem}>
          <span className={styles.icon}>{item.icon}</span>
          {!isCollapsed && <span className={styles.label}>{item.text}</span>}
        </a>
      ))}
    </aside>
  );
}
