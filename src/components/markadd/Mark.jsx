'use client';

import React, { useState, useEffect } from 'react';
import styles from './mark.module.css';

export default function AddMarkForm({ onAdd }) {
  const [form, setForm] = useState({
    subjectName: '',
    mark: '',
    dueDate: '',
    classId: '',
    studentId: '',
  });

  const [students, setStudents] = useState([]);

  const availableSubjects = ['Математика', 'Історія', 'Біологія'];
  const availableClasses = ['1', '2', '7A'];
  const availableMarks = ['1', '2', '12'];

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === 'classId') {
      setForm((prev) => ({ ...prev, studentId: '' })); // очистити попередній вибір

      try {
        const res = await fetch(`/api/students?classId=${value}`);
        const data = await res.json();
        setStudents(data.students || []);
      } catch (err) {
        console.error('Помилка при завантаженні учнів:', err);
        setStudents([]);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      subjectName: '',
      mark: '',
      dueDate: '',
      classId: '',
      studentId: '',
    });
    setStudents([]);
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

      <select
        name="mark"
        value={form.mark}
        onChange={handleChange}
        required
        className={styles.select}
      >
        <option value="">Оберіть оцінку</option>
        {availableMarks.map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

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

      {students.length > 0 && (
        <select
          name="studentId"
          value={form.studentId}
          onChange={handleChange}
          required
          className={styles.select}
        >
          <option value="">Оберіть учня</option>
          {students.map((s) => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>
      )}

      <button type="submit" className={styles.button}>Додати</button>
    </form>
  );
}
