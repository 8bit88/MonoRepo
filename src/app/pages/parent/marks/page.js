"use client";

import { useState } from "react";
import Sidebar from "../../../../components/sidebar/Sidebar";
import styles from "./mark.module.css";

export default function MarksPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const subjects = [
    { name: "Математика", semester: 11, test: 10 },
    { name: "Історія", semester: 9, test: 8 },
    { name: "Фізика", semester: 12, test: 11 },
    { name: "Українська мова", semester: 10, test: 9 },
    { name: "Англійська", semester: 11, test: 10 },
    { name: "Біологія", semester: 10, test: 9 },
    { name: "Хімія", semester: 8, test: 7 },
  ];

  const avg =
    subjects.reduce((sum, s) => sum + s.semester, 0) / subjects.length;

  return (
    <div className={styles.layout}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}> Оцінки</h1>
            <p className={styles.subtitle}>Переглядайте оцінки за навчання</p>
          </div>
        </header>

        <div className={styles.summary}>
          <div className={styles.summaryItem}>
            {" "}
            Середній бал: {avg.toFixed(1)}
          </div>
        </div>

        <section className={styles.marksSection}>
          {subjects.map((s, i) => (
            <div className={styles.markCard} key={i}>
              <h3>{s.name}</h3>
              <p>
                Семестрова: <strong>{s.semester}</strong>
              </p>
              <p>
                Контрольна: <strong>{s.test}</strong>
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
