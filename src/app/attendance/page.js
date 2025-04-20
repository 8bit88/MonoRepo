import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainContent">
      <header>
        <div className="heading-welcome">Відвідуваність </div>
        <p className="p"></p>{" "}
      </header> </div>
    </main>
  );
}
