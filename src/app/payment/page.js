<<<<<<< HEAD
import Sidebar from "@/components/sidebar/Sidebar"; 
import styles from "./pay.module.css";
=======

import Sidebar from "@/components/Sidebar"; // шлях до твого компонента
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e


export default function Home() {
  return (
    <main>
      <div className="sidebar">
<<<<<<< HEAD
              <Sidebar />{" "}
            </div>
            <div className="mainContent">
              <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
                Реквізити для оплати
              </h1>
            
        <div className={styles.container}>
          <div className={styles.overlayBorder}>
            <div className={styles.payment}>
              <div>
              <img src="/paycode.jpg" alt="paycode" className={styles.payc}/> </div>
              <div>
                <b>Отримувач: </b> ЄРМОЛЕНКО ТЕТЯНА МАРКІВНА
              </div>
              <div>
                <b>IBAN: </b> UA503052990000026000036306210
              </div>
              <div>
                <b>РНОКПП/ЄДРПОУ: </b> 3161712360
              </div>
              <div>
                <b> Призначення платежу: </b> Поповнення рахунку
              </div>
            </div>
          </div>
        </div>
        </div>
=======
        <Sidebar />
      </div>
      <div className="mainContent">
        <header>
          <div className="heading-welcome">Оплата </div>
          <p className="p">

            Отримувач ЄРМОЛЕНКО ТЕТЯНА МАРКІВНА
            <div>IBAN UA503052990000026000036306210 </div>
            <div>РНОКПП/ЄДРПОУ 3161712360</div>
            <div>Призначення платежу: Поповнення рахунку</div>

          </p>{" "}
        </header>{" "}
      </div>
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
    </main>
  );
}
