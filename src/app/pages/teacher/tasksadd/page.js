"use client";
import Sidebar from "../../../../components/sidebartecher/Sidebar";
import React, { useState } from "react";
import AddAssignmentForm from "../../../../components/taskadd/Task";
import styles from "./task.module.css";

export default function TasksPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [assignments, setAssignments] = useState([]);

  const handleAddAssignment = (newAssignment) => {
    setAssignments((prev) => [...prev, newAssignment]);
  };

  return (
    <main className={styles.container}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <h1 className={styles.title}>Завдання</h1>
          <p className={styles.subtitle}>Додати нове завдання</p>

          <AddAssignmentForm onAdd={handleAddAssignment} />
        </header>

        <section>
          <h2 className={styles.listTitle}>Список завдань</h2>
          {assignments.length === 0 ? (
            <p>Завдань поки немає.</p>
          ) : (
            <ul className={styles.assignmentList}>
              {assignments.map((a, index) => (
                <li key={index} className={styles.assignmentItem}>
                  <strong>{a.subjectName}</strong> – {a.description}
                  <br />
                  <em>
                    Клас: {a.classId}, До:{" "}
                    {new Date(a.date).toLocaleDateString("uk-UA")}
                  </em>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
