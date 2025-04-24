"use client";
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { toast } from "sonner";

const MenuTable = ({ dayName, sheetIndex, options, onChange }) => {
  return (
    <div className={styles.menuContainer}>
      <b>{dayName}</b>

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
    </div>
  );
};

const Menu = () => {
  const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

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
      toast("Успішно надіслано всі дані!", {
        position: "top-center",
        duration: 4000,
      });
    } catch (err) {
      console.error("Помилка:", err);
    }
  };

  return (
    <div>
      <div className={styles.menuWrapper}>
        {daysOfWeek.map((day, index) => (
          <MenuTable
            key={index}
            dayName={day}
            sheetIndex={index}
            options={menuOptions[day]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button onClick={handleSubmit} className={styles.button}>
        Підтвердити все
      </button>
    </div>
  );
};

export default Menu;
