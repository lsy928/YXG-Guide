import Sidebar from './Sidebar.jsx';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen p-4">
      <div className="md:grid md:grid-cols-[16rem_1fr] md:gap-6">
        <Sidebar />
        <main className="space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
