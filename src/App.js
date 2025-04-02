import React from 'react';
import './App.css';

const SignInComponent = () => {
    return (
        <div className="element-light">
            <div className="background">
                <img className="element" alt="Element" src="/image/logo.png" />

                <p className="text-wrapper">
                    Увійдіть, щоб мати доступ до всіх функцій
                </p>

                <div className="container">
                    <div className="overlay-border">
                        <h2 className="heading-sign-in">Вхід</h2>
                        <p className="subtext">Введіть свої дані для входу в акаунт</p>

                        <form className="form">
                            <label className="label" htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <input id="email" type="email" placeholder="you@example.com" required />
                                <img className="icon" src="/image/mail.png" alt="Email" />
                            </div>

                            <label className="label" htmlFor="password">Пароль</label>
                            <div className="input-wrapper">
                                <input id="password" type="password" placeholder="Введіть пароль" required />
                                <img className="icon" src="/image/code.png" alt="Password" />
                            </div>

                            <div className="password-options">
                                <p>Забули пароль?</p>
                            </div>

                            <div className="checkbox-wrapper">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Не виходити з системи</label>
                            </div>

                            <button className="login-button" onClick={() => window.location.href = 'main_parent.html'}>
                                Вхід
                            </button>

                            <div className="register-link">
                                <span>Новий користувач?</span>
                                <p>Створіть акаунт</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInComponent;
