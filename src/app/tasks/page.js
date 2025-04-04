import Sidebar from "@/components/Sidebar"; // шлях до твого компонента

export default function Home() {
  return (
    <main>
         <Sidebar />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Завдання вашої дитини
      </h1>
      
    </main>
  );
}
