"use client";
import Sidebar from "../../../components/sidebartecher/Sidebar";
import React, { useState, useEffect } from "react";
import AddMarkForm from "../../../components/markadd/Mark";
import styles from "./mark.module.css";


export default function TasksPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mark, setMark] = useState([]);

  const handleAddMark = (newMark) => {
    setMark((prev) => [...prev, newMark]);
  };

  return (
    <main className={styles.container}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div className={`${styles.content} ${isCollapsed ? styles.expanded : ''}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Оцінки</h1>
          <p className={styles.subtitle}>Додати нове оцінку</p>

          <AddMarkForm onAdd={handleAddMark} />
        </header>

        <section>
          <h2 className={styles.listTitle}>Список оцінок</h2>
          {mark.length === 0 ? (
            <p>Оцінок поки немає.</p>
          ) : (
            <ul className={styles.markList}>
              {mark.map((a, index) => (
                <li key={index} className={styles.markItem}>
                  <strong>{a.subjectName}</strong> – {a.mark}<br />
                  <em>Клас: {a.classId}, Оцінка за: {a.dueDate}</em>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
