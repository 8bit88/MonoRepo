"use client";
import { useEffect, useState } from "react";
import styles from "../shedule/SheduleTable.module.css";

const ScheduleTable = ({ classId }) => {
  const [schedule, setSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const res = await fetch(`/api/schedule?classId=${classId}`);
        if (!res.ok) {
          throw new Error("Не вдалося завантажити розклад");
        }
        const data = await res.json();
        setSchedule(data.schedule);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (classId) {
      fetchSchedule();
    } else {
      setLoading(false);
      setError("Не передано classId");
    }
  }, [classId]);

  if (loading)
    return <p className={styles.message}>Завантаження розкладу...</p>;
  if (error) return <p className={styles.error}>Помилка: {error}</p>;
  if (!schedule || schedule.length === 0)
    return <p className={styles.message}>Розклад не знайдено</p>;

  return (
    <div className={styles.tiWrapper}>
    <div className={styles.scheduleContainer}>
      {schedule.week.map((day, idx) => (
        <div key={idx} className={styles.dayBlock}>
          <div className={styles.dayHeading}>{day.day}</div>
          {day.subjects.map((lesson, i) => (
            <div key={i} className={styles.lesson}>
              <div className={styles.lessonName}>{lesson.subject}</div>
              <div>{lesson.class}</div>
              <div className={styles.lessonTime}>{lesson.time}</div>
              
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ScheduleTable;
