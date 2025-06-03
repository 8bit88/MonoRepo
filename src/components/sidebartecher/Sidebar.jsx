"use client";

import styles from "./Sidebar.module.css";
import React from "react";
import clsx from "clsx";
import {
  BookOpen,
  ClipboardList,
  Calendar,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const navItems = [
  { icon: <BookOpen />, text: "Оцінки", link: "/pages/teacher/marksadd" },
  { icon: <ClipboardList />, text: "Завдання", link: "/pages/teacher//tasksadd" },
  { icon: <Calendar />, text: "Розклад", link: "/pages/teacher/timetable" },
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
