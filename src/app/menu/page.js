<<<<<<< HEAD
import Sidebar from "@/components/sidebar/Sidebar"; 
import MenuTable from "@/components/menu/Menu"; 
=======
import Sidebar from "../../components/sidebar/Sidebar"; 
import MenuTable from "../../components/menu/Menu"; 
>>>>>>> 0c434a7701dd977b0a6f033a0a8cfcc9995f906e

export default function Home() {
  return (
    <main>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="mainContent">
        <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Меню</h1>
        <MenuTable />
      </div>
    </main>
  );
}
