"use client";
import React, { useState } from "react";
import styles from "./Taskadd.module.css";

export default function AddAssignmentForm({ onAdd }) {
  const [form, setForm] = useState({
    subjectName: "",
    description: "",
    dueDate: "",
    classId: "",
  });

  const [lastMessage, setLastMessage] = useState("");

  const availableSubjects = ["Математика", "Історія", "Біологія"];
  const availableClasses = ["1", "2", "3"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/taskadd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Помилка при збереженні");

      const newAssignment = await res.json();

      onAdd && onAdd(newAssignment);

     

      setForm({
        subjectName: "",
        description: "",
        dueDate: "",
        classId: "",
      });
    } catch (error) {
      setLastMessage(error.message || "Сталася помилка при додаванні завдання");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <select
          name="subjectName"
          value={form.subjectName}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">Оберіть предмет</option>
          {availableSubjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <textarea
          name="description"
          placeholder="Опис завдання"
          value={form.description}
          onChange={handleChange}
          required
          className={styles.textarea}
        />

        <input
          type="date"
          name="dueDate"
          value={form.dueDate}
          onChange={handleChange}
          required
          className={styles.input}
        />

        <select
          name="classId"
          value={form.classId}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">Оберіть клас</option>
          {availableClasses.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>

        <button type="submit" className={styles.button}>
          Додати
        </button>
      </form>

      {lastMessage && <div className={styles.successMessage}>{lastMessage}</div>}
    </>
  );
}
