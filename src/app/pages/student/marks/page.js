"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/sidebarstud/Sidebar";
import Mark from "../../../../components/marks/marktable";
import styles from "../marks/mark.module.css";

export default function MarksPage() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [name, setName] = useState(null);

    const [classId, setClassId] = useState(null);
  
    useEffect(() => {
      const userData = localStorage.getItem("user");
      if (userData) {
        const user = JSON.parse(userData);
        setClassId(user.classId);
        setName(user.name);
      }
    }, []);
  
    if (!classId) return <p>Клас не знайдено</p>;

  return (
    <main className={styles.container}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Оцінки</h1>
            <p className={styles.subtitle}>
              Переглядайте оцінки з усіх предметів
            </p>
          </div>
        </header>
        <Mark classId={classId} name={name} />
      </div>
    </main>
  );
}
