"use client";
import React, { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { toast } from "sonner";

const MenuTable = ({ dayName, sheetIndex, options = {}, onChange }) => (
  <div className={styles.menuContainer}>
    <b>{dayName}</b>

    {["Перша страва", "Основна страва", "Підвечірок"].map((label, i) => {
      const field = ["first", "second", "snack"][i];
      return (
        <div key={field}>
          <p>{label}</p>
          <select
            onChange={(e) => onChange(sheetIndex, field, e.target.value)}
            className={styles.select}
          >
            <option value=""> </option>
            {options[field]?.map((item, idx) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      );
    })}
  </div>
);

const Menu = () => {
  const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця"];

  const [menuOptions, setMenuOptions] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  const [formData, setFormData] = useState(
    Array(5).fill({ first: "", second: "", snack: "" })
  );

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("/api/getMenuVariants");
        const data = await res.json();
        console.log("Меню з API:", data);
        if (data.success) setMenuOptions(data.menu);
      } catch (err) {
        console.error("Помилка при завантаженні меню:", err);
      }
    };

    const fetchUserInfo = async () => {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        if (data.user) {
          setUserInfo({ name: data.user.name, classId: data.user.classId });
        }
      } catch (err) {
        console.error("Помилка при отриманні користувача:", err);
      }
    };

    fetchMenu();
    fetchUserInfo();
  }, []);

  const handleChange = (index, field, value) => {
    setFormData((prev) =>
      prev.map((day, i) =>
        i === index ? { ...day, [field]: value } : day
      )
    );
  };

  const handleSubmit = async () => {
    if (!userInfo?.name || !userInfo?.classId) {
      toast("Не вдалося отримати ім’я або клас користувача", {
        position: "top-center",
        duration: 4000,
      });
      return;
    }

    const incomplete = formData.some(
      (day) => !day.first || !day.second || !day.snack
    );
   // if (incomplete) {
    //  toast("Будь ласка, заповніть меню на кожен день!", {
       // position: "top-center",
       // duration: 4000,
     // });
    //  return;
   // }

    try {
      for (let i = 0; i < formData.length; i++) {
        const dataToSend = {
          name: userInfo.name,
          classId: userInfo.classId,
          ...formData[i],
          sheetIndex: i,
        };

        await fetch("/api/sendmenu", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        });
      }

      toast("Дякуємо! Вибір меню збережено", {
        position: "top-center",
        duration: 4000,
      });
    } catch (err) {
      console.error("Помилка надсилання:", err);
      toast("Сталася помилка під час надсилання", {
        position: "top-center",
        duration: 4000,
      });
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
            options={menuOptions[day] || {}}
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
