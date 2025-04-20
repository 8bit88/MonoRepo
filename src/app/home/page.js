import Image from "next/image";
import "../home/home.module.css";

import React from "react";
import Sidebar from "@/components/Sidebar"; // шлях до твого компонента

export default function Home() {
  return (
    <>
    
      <main>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContent">
          <header>
            <div className="heading-welcome">Вітаємо, Тетяна </div>
            <p className="p">
              Тут вся інформація про навчання вашої дитини
            </p>{" "}
          </header>
        
          <div className="body">
            <div className="background-border">
              <div className="heading-grade">Середня оцінка</div>
              <div className="text-wrapper-12">10</div>
              <div className="text-wrapper-13">90.3% вище середнього</div>
              <div className="text-wrapper-14">+2.4%</div>
            </div>
            <div className="background-border-2">
              <div className="heading-attendance">Відвідуваність</div>
              <div className="text-wrapper-15">95%</div>
              <p className="text-wrapper-16">3 пропуски в цьому семестрі</p>
              <div className="text-wrapper-17">+1.2%</div>
            </div>
            <div className="background-border-3">
              <div className="heading-completed">Виконані завдання</div>
              <div className="text-wrapper-18">28/30</div>
              <div className="text-wrapper-19">2 завдання залишилось</div>
              <div className="text-wrapper-20">+5%</div>
            </div>
            <div className="background-border-4">
              <div className="heading-upcoming">Найближчі події</div>
              <div className="text-wrapper-21">5</div>
              <p className="text-wrapper-22">
                Скоро: Екскурсія в музей (2 дні)
              </p>
            </div>
            <div className="tablist">
              <div className="tab">
                <div className="text-wrapper-23">Огляд</div>
              </div>
              <div className="tab-academics">Успішність</div>
              <div className="tab-activities">Події</div>
            </div>
            <div className="tabpanel">
              <div className="background-border-5">
                <div className="heading-recent">Нові оцінки</div>
                <button className="button-2">
                  <div className="text-wrapper-24">подивитись всі</div>
                </button>
                <div className="text-wrapper-25">Останні оцінки Артема</div>
                <div className="horizontal-border-3">
                  <div className="background-2">
                    <div className="text-wrapper-26">10</div>
                  </div>
                  <div className="text-wrapper-27">Математика</div>
                  <div className="text-wrapper-28">6/10/2025</div>
                  <div className="text-wrapper-29">92%</div>
                </div>
                <div className="horizontal-border-4">
                  <div className="background-3">
                    <div className="text-wrapper-30">9</div>
                  </div>
                  <div className="text-wrapper-31">Природознавство</div>
                  <div className="text-wrapper-32">6/5/2025</div>
                  <div className="text-wrapper-33">87%</div>
                </div>
                <div className="horizontal-border-5">
                  <div className="background-2">
                    <div className="text-wrapper-34">11</div>
                  </div>
                  <div className="text-wrapper-35">English</div>
                  <div className="text-wrapper-36">6/8/2025</div>
                  <div className="text-wrapper-37">90%</div>
                </div>
                <div className="horizontal-border-6">
                  <div className="background-2">
                    <div className="text-wrapper-34">12</div>
                  </div>
                  <div className="text-wrapper-38">Українська мова</div>
                  <div className="text-wrapper-36">6/8/2025</div>
                  <div className="text-wrapper-39">100%</div>
                </div>
              </div>
              <div className="background-border-6">
                <div className="heading-upcoming-2">Майбутні події</div>
                <button className="button-3">
                  <div className="text-wrapper-40">Календар</div>
                </button>
                <div className="text-wrapper-41">
                  Заплановані заходи та терміни
                </div>
                <div className="horizontal-border-3">
                  <div className="paragraph">
                    <div className="text-wrapper-42">15</div>
                    <div className="text-wrapper-43">Вер</div>
                  </div>
                  <div className="text-wrapper-44">Тест</div>
                  <div className="text-wrapper-45">10:00 • Математика</div>
                </div>
                <div className="horizontal-border-4">
                  <div className="paragraph">
                    <div className="text-wrapper-46">18</div>
                    <div className="text-wrapper-43">Вер</div>
                  </div>
                  <div className="text-wrapper-47">Науковий проєкт</div>
                  <div className="text-wrapper-48">15:00 • Хімія</div>
                </div>
                <div className="horizontal-border-5">
                  <div className="paragraph">
                    <div className="text-wrapper-49">20</div>
                    <div className="text-wrapper-43">Вер</div>
                  </div>
                  <div className="text-wrapper-50">Батьківські збори</div>
                  <div className="text-wrapper-48">17:00 • Загальне</div>
                </div>
                <div className="overlay">
                  <button className="button-4">
                    <div className="text-wrapper-51">+ Додати в календар</div>
                  </button>
                </div>
              </div>
              <div className="background-border-7">
                <div className="heading-weekly">Розклад</div>
                Розклад уроків вашої дитини на тиждень
                <div className="schedule-container">
                  <div className="day-heading">Понеділок</div>

                  <div className="lesson">
                    <span className="lesson-name">Математика</span>
                    <span className="lesson-time">8:30 - 9:30</span>
                  </div>
                  <div className="lesson">
                    <span className="lesson-name">Хімія</span>
                    <span className="lesson-time">9:45 - 10:45</span>
                  </div>
                  <div className="lesson">
                    <span className="lesson-name">Англійська мова</span>
                    <span className="lesson-time">11:00 - 12:00</span>
                  </div>

                  <div className="break">Обідня перерва</div>

                  <div className="lesson">
                    <span className="lesson-name">Історія України</span>
                    <span className="lesson-time">1:00 - 2:00</span>
                  </div>
                  <div className="lesson">
                    <span className="lesson-name">Мистецтво</span>
                    <span className="lesson-time">2:15 - 3:15</span>
                  </div>
                </div>
                <div className="text-wrapper-56">Вівторок</div>
                <div className="background-8">
                  <p className="element">
                    <span className="span">
                      Математика
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">8:30 - 9:30</span>
                  </p>
                </div>
                <div className="background-9">
                  <p className="element-2">
                    <span className="span">
                      Хімія
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">9:45 - 10:45</span>
                  </p>
                </div>
                <div className="background-10">
                  <p className="element-3">
                    <span className="span">
                      Англійська мова
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">11:00 - 12:00</span>
                  </p>
                </div>
                <div className="text-wrapper-57">Обідня перерва</div>
                <div className="background-11">
                  <p className="element-4">
                    <span className="span">
                      Історія України
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">1:00 - 2:00</span>
                  </p>
                </div>
                <div className="background-12">
                  <p className="element-5">
                    <span className="span">
                      Мистецтво
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">2:15 - 3:15</span>
                  </p>
                </div>
                <div className="text-wrapper-58">Середа</div>
                <div className="background-13">
                  <p className="element">
                    <span className="span">
                      Математика
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">8:30 - 9:30</span>
                  </p>
                </div>
                <div className="background-14">
                  <p className="element-2">
                    <span className="span">
                      Хімія
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">9:45 - 10:45</span>
                  </p>
                </div>
                <div className="background-15">
                  <p className="element-3">
                    <span className="span">
                      Англійська мова
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">11:00 - 12:00</span>
                  </p>
                </div>
                <div className="text-wrapper-59">Обідня перерва</div>
                <div className="background-16">
                  <p className="element-4">
                    <span className="span">
                      Історія України
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">1:00 - 2:00</span>
                  </p>
                </div>
                <div className="background-17">
                  <p className="element-5">
                    <span className="span">
                      Мистецтво
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">2:15 - 3:15</span>
                  </p>
                </div>
                <div className="text-wrapper-60">Четвер</div>
                <div className="background-18">
                  <p className="element">
                    <span className="span">
                      Математика
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">8:30 - 9:30</span>
                  </p>
                </div>
                <div className="background-19">
                  <p className="element-2">
                    <span className="span">
                      Хімія
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">9:45 - 10:45</span>
                  </p>
                </div>
                <div className="background-20">
                  <p className="element-3">
                    <span className="span">
                      Англійська мова
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">11:00 - 12:00</span>
                  </p>
                </div>
                <div className="text-wrapper-61">Обідня перерва</div>
                <div className="background-21">
                  <p className="element-4">
                    <span className="span">
                      Історія України
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">1:00 - 2:00</span>
                  </p>
                </div>
                <div className="background-22">
                  <p className="element-5">
                    <span className="span">
                      Мистецтво
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">2:15 - 3:15</span>
                  </p>
                </div>
                <div className="text-wrapper-62">П’ятниця</div>
                <div className="background-23">
                  <p className="element">
                    <span className="span">
                      Математика
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">8:30 - 9:30</span>
                  </p>
                </div>
                <div className="background-24">
                  <p className="element-2">
                    <span className="span">
                      Хімія
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">9:45 - 10:45</span>
                  </p>
                </div>
                <div className="background-25">
                  <p className="element-3">
                    <span className="span">
                      Англійська мова
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">11:00 - 12:00</span>
                  </p>
                </div>
                <div className="text-wrapper-63">Обідня перерва</div>
                <div className="background-26">
                  <p className="element-4">
                    <span className="span">
                      Історія України
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">1:00 - 2:00</span>
                  </p>
                </div>
                <div className="background-27">
                  <p className="element-5">
                    <span className="span">
                      Мистецтво
                      <br />
                    </span>{" "}
                    <span className="text-wrapper-54">2:15 - 3:15</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
