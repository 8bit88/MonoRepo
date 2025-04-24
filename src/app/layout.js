import "../app/globals.css";
import { Montserrat } from "next/font/google";
import { Toaster } from "sonner";

const font = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "School App",
  description: "Приватна школа — панель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="content">{children}</main>
      </body>
    </html>
  );
}
