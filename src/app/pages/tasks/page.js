"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Calendar } from "../../../components/ui/calendar";
import styles from "./task.module.css"; 

export default function TasksPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

 
  const [classId] = useState("1");

  useEffect(() => {
    const fetchTasks = async () => {
      if (!date || !classId) return;

      const formattedDate = date.toISOString().split("T")[0];
      try {
        const res = await fetch(`/api/assignments/by-date?date=${formattedDate}&classId=${classId}`);
        if (!res.ok) throw new Error("Failed to fetch tasks");
        const data = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Помилка при завантаженні завдань:", error);
        setTasks([]);
      }
    };

    fetchTasks();
  }, [date, classId]);

  const formattedDate = date.toISOString().split("T")[0];

  return (
    <main className={styles.container}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}>
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}>Завдання</h1>
            <p className={styles.subtitle}>Переглядайте завдання з усіх предметів</p>
          </div>
        </header>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        {formattedDate && (
          <div className={styles.taskList}>
            <h2 className={styles.taskTitle}>Завдання на {formattedDate}</h2>

            {tasks.length === 0 ? (
              <p>Немає завдань на цей день</p>
            ) : (
              <div className={styles.cardsContainer}>
                {tasks.map((task, index) => (
                  <div key={index} className={styles.card}>
                    <h3 className={styles.cardTitle}>{task.title}</h3>
                    {task.name && <p className={styles.cardName}>{task.name}</p>}
                    <p className={styles.cardDescription}>{task.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
