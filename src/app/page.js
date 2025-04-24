"use client";

import Image from "next/image";
import mailImg from "../../public/mail.png";
import codeImg from "../../public/code.png";
import styles from "./Login.module.css";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const handleForgotClick = () => {
    router.push("/pages/password");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = await login(formData);

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/pages/home"); // перенаправлення після входу
    }
  }
  async function login(formData) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    if (!res.ok) {
      return { error: "Login failed" };
    }

    return await res.json();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlayBorder}>
          <h2 className={styles.headingSignIn}>Вхід</h2>
          <p className={styles.subtext}>Введіть свої дані для входу в акаунт</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="email"
                name="email" 
                type="email"
                placeholder="you@example.com"
                required
              />
              <Image src={mailImg} alt="Email icon" width={20} height={20} />
            </div>

            <label className={styles.label} htmlFor="password">
              Пароль
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Введіть пароль"
                required
              />
              <Image src={codeImg} alt="Password icon" width={20} height={20} />
            </div>

            <div className={styles.passwordOptions}>
              <p
                className={styles.forgotPassword}
                onClick={handleForgotClick}
                style={{ cursor: "pointer" }}
              >
                Забули пароль?
              </p>
            </div>

            <button className={styles.loginButton} type="submit">
              Вхід
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
}
