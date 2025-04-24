"use client";
import Sidebar from "../../../components/sidebar/Sidebar";
import styles from "./pay.module.css";
import Image from "next/image";
import { useState } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";

export default function PayPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={styles.layout}>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        className={`${styles.content} ${isCollapsed ? styles.expanded : ""}`}
      >
        <header className={styles.header}>
          <div>
            <h1 className={styles.title}> Оплата</h1>
            <p className={styles.subtitle}>Всі рахунки за навчання</p>
          </div>
        </header>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Послуга</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Метод</TableHead>
              <TableHead className="text-right">Сума</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Харчування</TableCell>
              <TableCell>Оплачено</TableCell>
              <TableCell>Рахунок ФОП</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
             <TableRow>
              <TableCell className="font-medium">Навчання</TableCell>
              <TableCell>Оплачено</TableCell>
              <TableCell>Рахунок ФОП</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className={styles.container}>
          <div className={styles.overlayBorder}>
            <div className={styles.payment}>
              <div>
                <Image
                  src="/paycode.jpg"
                  alt="Logo"
                  width={200}
                  height={500}
                  className={styles.payc}
                />
              </div>
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
      </main>
    </div>
  );
}
