import ScheduleTable from "@/components/ScheduleTable";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />{" "}
      </div>

      <div className="mainContent">
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Розклад</h1>
        <ScheduleTable />
      </div>
    </main>
  );
}
