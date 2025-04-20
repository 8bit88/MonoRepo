import "./home.module.css";

import React from "react";
<<<<<<< HEAD
import Sidebar from "@/components/sidebar/Sidebar";
import Infolabel from "@/components/info/Info";
=======
import Sidebar from "../../components/Sidebar"; // шлях до твого компонента
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="mainContent">
          <header>
            <div className="heading-welcome"> <Infolabel /></div>
          </header>
          <div className="body">
            <div className="background-border">
             
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
