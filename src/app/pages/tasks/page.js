"use client";

import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Calendar } from "../../../components/ui/calendar";
import styles from "./task.module.css";

export default function TasksPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [date, setDate] = useState(new Date());

  const tasks = [
    {
      date: "2025-04-22",
      title: "Математика",
      name: "Виконати вправи",
      description: "Підручник з математики сторінка 6–12",
    },
    {
      date: "2025-04-23",
      title: "Біологія",
      name: "Скласти презентацію",
      description: "Зробити слайди для уроку біології",
    },
  ];

  const formattedDate = date ? date.toISOString().split("T")[0] : null;
  const filteredTasks = formattedDate
    ? tasks.filter((task) => task.date === formattedDate)
    : [];

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

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        {formattedDate && (
          <div className={styles.taskList}>
            <h2 className={styles.taskTitle}>
              Завдання на {formattedDate}
            </h2>
            {filteredTasks.length === 0 ? (
              <p>Немає завдань на цей день</p>
            ) : (
              <div className={styles.cardsContainer}>
                {filteredTasks.map((task, index) => (
                  <div key={index} className={styles.card}>
                    <h3 className={styles.cardTitle}>{task.title}</h3>
                    {task.name && (
                      <p className={styles.cardName}>{task.name}</p>
                    )}
                    <p className={styles.cardDescription}>
                      {task.description}
                    </p>
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
