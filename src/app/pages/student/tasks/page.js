"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../../../components/sidebarstud/Sidebar";
import Task from "../../../../components/tasks/tasktable";
import styles from "../tasks/task.module.css";


export default function TasksPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const [classId, setClassId] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setClassId(user.classId);
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
            <h1 className={styles.title}>Завдання</h1>
            <p className={styles.subtitle}>
              Переглядайте завдання з усіх предметів
            </p>
          </div>
        </header>
        <Task classId={classId} />
      </div>
    </main>
  );
}
