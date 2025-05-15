import Sidebar from "../components/sidebar";
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
