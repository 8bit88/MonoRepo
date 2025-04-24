"use client";

import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import styles from "./SheduleTable.module.css";
import ScheduleTable from "../../../components/shedule/ScheduleTable"


export default function ShedulePage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [date, setDate] = useState(new Date());


  return (
    <main className={styles.container}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <div
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <div>
          <h1 className={styles.title}>Розклад</h1>
          <p className={styles.subtitle}>Всі уроки та гуртки на тиждень</p>
          </div>
        </header>
          <ScheduleTable />
          </div>
        </main>
  );
}
