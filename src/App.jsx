import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import RoutineWork from './pages/RoutineWork.jsx';
import Library from './pages/Library.jsx';
import ManagerGuide from './pages/ManagerGuide.jsx';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routine" element={<RoutineWork />} />
        <Route path="/library" element={<Library />} />
        <Route path="/manager" element={<ManagerGuide />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
