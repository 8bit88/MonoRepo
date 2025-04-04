import ScheduleTable from '@/components/ScheduleTable'; // шлях до твого компонента
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
   
    <main>
         <Sidebar />
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Розклад уроків вашої дитини на тиждень
      </h1>
       <ScheduleTable/>
    </main>
  );
}
