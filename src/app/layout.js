import "./globals.css";

export const metadata = {
  title: "School App",
  description: "Приватна школа — панель",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ukr">
      <body className="flex">
        <main className="ml-[255px] p-6 w-full">{children}</main>
      </body>
    </html>
  );
}
