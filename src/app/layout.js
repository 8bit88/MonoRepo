<<<<<<< HEAD

=======
import Sidebar from "../components/Sidebar";
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e
import "../app/globals.css";
import {Montserrat} from "next/font/google";

const shrift = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "School App",
  description: "Приватна школа — панель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
