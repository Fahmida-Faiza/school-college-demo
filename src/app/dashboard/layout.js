// app/dashboard/layout.js
import DashboardSidebar from './Sidebar.jsx';

export default function DashboardLayout({ children }) {
  return (
    <div className='lg:flex  lg:gap-x-24  my-10 max-w-7xl mx-auto'>
      <DashboardSidebar />
      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
}
