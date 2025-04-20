"use client";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
//import { toast } from "sonner";

const MenuTable = ({ dayName, sheetIndex, options, onChange }) => {
  return (
    <div className={styles.menuContainer}>
      <h3>{dayName}</h3>

      <p>Перша страва</p>
      <select
        name="first"
        onChange={(e) => onChange(sheetIndex, "first", e.target.value)}
        className={styles.select}
      >
        <option value=""> </option>
        {options?.first?.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>

      <p>Основна страва</p>
      <select
        name="second"
        onChange={(e) => onChange(sheetIndex, "second", e.target.value)}
        className={styles.select}
      >
        <option value=""> </option>
        {options?.second?.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>

      <p>Підвечірок</p>
      <select
        name="snack"
        onChange={(e) => onChange(sheetIndex, "snack", e.target.value)}
        className={styles.select}
      >
        <option value=""> </option>
        {options?.snack?.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
=======
import React, { useState } from "react";
import styles from "./Menu.module.css";

const MenuTable = ({ sheetIndex, dayName }) => {
  const [formData, setFormData] = useState({
    first: "",
    second: "",
    snack: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/sendToSheet", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          sheetIndex,
        }),
      });
      const result = await res.json();
      alert(result.success ? "Успішно надіслано!" : "Помилка при надсиланні");
    } catch (err) {
      console.error("Помилка:", err);
      alert("Щось пішло не так");
    }
  };

  return (
    <div className={styles.menuContainer}>
      <h3>{dayName}</h3>
      <p>Перша страва</p>
      <select name="first" onChange={handleChange} className={styles.select}>
        <option value="Суп">Суп</option>
        <option value="Борщ">Борщ</option>
      </select>

      <p>Основна страва</p>
      <select name="second" onChange={handleChange} className={styles.select}>
        <option value="Картошка з грибами">Картошка з грибами</option>
        <option value="Гречка з котлетою">Гречка з котлетою</option>
      </select>

      <p>Підвечірок</p>
      <select name="snack" onChange={handleChange} className={styles.select}>
        <option value="так">Так</option>
        <option value="ні">Ні</option>
      </select>

      <button onClick={handleSubmit} className={styles.button}>
        Підтвердити
      </button>
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
    </div>
  );
};

const Menu = () => {
  const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

<<<<<<< HEAD
  const [menuOptions, setMenuOptions] = useState({});
  const [formData, setFormData] = useState(
    Array(5).fill({ first: "", second: "", snack: "" })
  );

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch("/api/getMenuVariants");
      const data = await res.json();
      if (data.success) {
        setMenuOptions(data.menu);
      }
    };

    fetchMenu();
  }, []);

  const handleChange = (index, field, value) => {
    console.log({ index, field, value });
    setFormData((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return updated;
    });
  };

  const handleSubmit = async () => {
    try {
      for (let i = 0; i < formData.length; i++) {
        const dataToSend = {
          ...formData[i],
          sheetIndex: i,
        };

        console.log({ dataToSend });

        await fetch("/api/sendToSheet", {
          method: "POST",
          body: JSON.stringify(dataToSend),
        });
      }

      //toast("Успішно надіслано всі дані!");
    } catch (err) {
      console.error("Помилка:", err);
      // toast("Щось пішло не так");
    }
  };

  return (
    <div>
      {daysOfWeek.map((day, index) => (
        <MenuTable
          key={index}
          dayName={day}
          sheetIndex={index}
          options={menuOptions[day]}
          onChange={handleChange}
        />
      ))}

      <button onClick={handleSubmit} className={styles.button}>
        Підтвердити все
      </button>
=======
  return (
    <div>
      {daysOfWeek.map((day, index) => (
        <MenuTable key={index} sheetIndex={index} dayName={day} />
      ))}
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
    </div>
  );
};

export default Menu;
