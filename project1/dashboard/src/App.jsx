import "./App.css";
import SideBar from "./components/SideBar";
import OverView from "./pages/home/OverView";
import Project from "./pages/Projects/Project";
import Performance from "./pages/Performance";
import Verification from "./pages/verification/Verification";
import Setting from "./pages/settings/Setting";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <div>
      <SideBar />
      <Routes>
        <Route path="/overview" element={<OverView />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/settings" element={<Setting />} />
        <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="*" element={<Navigate to="/overview" />} />
      </Routes>
    </div>
  );
}

export default App;
