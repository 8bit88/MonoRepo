import Image from "next/image";
import mailImg from "../../public/mail.png";
import codeImg from "../../public/code.png";
import logoImg from "../../public/3.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <Image className="stream" src={logoImg} alt="School Logo" weight />
        <div className="container">
          <div className="overlay-border">
         
            <h2 className="heading-sign-in">Вхід</h2>
            <p className="subtext">Введіть свої дані для входу в акаунт</p>
            <form className="form">
              <label className="label" htmlFor="email">
                Email
              </label>
              <div className="input-wrapper">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required=""
                />

                <Image src={mailImg} alt="Email" />
              </div>
              <label className="label" htmlFor="password">
                Пароль
              </label>
              <div className="input-wrapper">
                <input
                  id="password"
                  type="password"
                  placeholder="Введіть пароль"
                  required=""
                />
                <Image src={codeImg} alt="Email" />
              </div>
              <div className="password-options">
                <a href="#" className="forgot-password">
                  Забули пароль?
                </a>
              </div>
            
              <Link href="/home">
                <button className="login-button">Вхід</button>
              </Link>

            
            </form>
          </div>
        </div>
    
    </>
  );
}
