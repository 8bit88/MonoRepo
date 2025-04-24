"use client";
import styles from "./password.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"



export default function Home() {
  const { replace } = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email) return;

    setLoading(true);
    try {
      await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "Відновлення доступу",
          text: `Ось посилання для відновлення паролю: https://example.com/reset?email=${encodeURIComponent(
            email
          )}`,
        }),
      });

      toast("Посилання для відновлення паролю на пошті", {
        position: "top-center",
        duration: 4000,
      });
      
      replace("/");
    } catch (error) {
      console.error("Помилка:", error);
      toast ("Щось пішло не так");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlayBorder}>
        <h2 className={styles.headingSignIn}>Відновлення доступу</h2>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>

          <div className={styles.inputWrapper}>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            className={styles.loginButton}
            type="button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Відправка..." : "Відправити"}
          </button>
        </form>
      </div>
    </div>
  );
}
