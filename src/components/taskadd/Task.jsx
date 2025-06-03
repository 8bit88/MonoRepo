'use client';

import React, { useState } from 'react';
import styles from './Taskadd.module.css';

export default function AddAssignmentForm({ onAdd }) {
  const [form, setForm] = useState({
    subjectName: '',
    description: '',
    dueDate: '',
    classId: '',
  });

  const availableSubjects = ['Математика', 'Історія', 'Біологія'];
  const availableClasses = ['6A', '6B', '7A'];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ subjectName: '', description: '', dueDate: '', classId: '' });
  };

  return (
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
          <option key={s} value={s}>{s}</option>
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
          <option key={cls} value={cls}>{cls}</option>
        ))}
      </select>

      <button type="submit" className={styles.button}>Додати</button>
    </form>
  );
}
