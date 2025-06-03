"use client";
import React, { useEffect, useState } from "react";
import ScheduleTable from "../../../../components/scheduletech/ScheduleTable";
import styles from "./SheduleTable.module.css"; 
import Sidebar from "../../../../components/sidebartecher/Sidebar";

export default function ShedulePage() {
  const [classId, setClassId] = useState(null);
   const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setClassId(user.classId);
    }
  }, []);

  if (!classId) return <p>Клас не знайдено</p>;



 return (
    <div className={styles.layout}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}> Розклад</h1>
            <p className={styles.subtitle}>Переглядайте розклад на тиждень</p>
          </div>
        </header>
       <ScheduleTable classId={classId} />
      </main>
    </div>
  );
}
