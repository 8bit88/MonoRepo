"use client";
import { useEffect, useState } from "react";
import { Calendar } from "../ui/calendar";
import styles from "../tasks/task.module.css";

const Task = () => {
  const [classId, setClassId] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const selectedDateStr = date.toISOString().split("T")[0];
  const formattedDate = date.toLocaleDateString("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  console.log({ tasks });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setClassId(user.classId);
    } else {
      setError("Користувача не знайдено в localStorage");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch(
          `/api/tasks?classId=${classId}&date=${selectedDateStr}`
        );
        if (!res.ok) throw new Error("Не вдалося завантажити завдання");
        const data = await res.json();
        setTasks(data.tasks || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (classId) fetchTasks();
  }, [classId, selectedDateStr]);

  const tasksForDate = tasks.filter((task) => {
    const taskDateStr = new Date(task.date).toISOString().split("T")[0];
    return taskDateStr === selectedDateStr;
  });

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <div className={styles.taskList}>
        <h2 className={styles.taskTitle}>Завдання на {formattedDate}</h2>

        <div className={styles.cardsContainer}>
          {tasksForDate.map((task, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{task.title}</h3>

              <p className={styles.cardDescription}>{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Task;
