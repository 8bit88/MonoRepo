"use client";

import { useState } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import MenuTable from "../../../../components/menu/Menu";
import styles from "./menu.module.css";

export default function MenuPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}> Меню</h1>
            <p className={styles.subtitle}>Обирайте меню на тиждень</p>
          </div>
        </header>
        <MenuTable />
      </main>
    </div>
  );
}
