import Sidebar from "@/components/Sidebar";
import "../app/globals.css";

export const metadata = {
  title: "School App",
  description: "Приватна школа — панель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>
        <header
          style={{
            paddingTop: "-3rem",
          }}
        >
          {" "}
        </header>

        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
