import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import OverView from "./pages/home/OverView";
import Project from "./pages/Projects/Project";
import Performance from "./pages/Performance";
import Verification from "./pages/verification/Verification";
import Setting from "./pages/settings/Setting";
import Search from "./components/Search";
import Profile from "./components/Profile";
import WhatsApp from "./components/WhatsApp";
function App() {
  return (
    <div>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 flex  flex-col">
          {/* Top Header  */}
          <div className="flex justify-end items-center p-4 gap-3">
            <Search />
            <Profile />
          </div>
          {/* Page Content */}
          <div className="flex-1 p-4 ">
            <Routes>
              <Route path="/home" element={<OverView />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/verification" element={<Verification />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/" element={<Navigate to="/overview" />} />
              <Route path="*" element={<Navigate to="/overview" />} />
            </Routes>
          </div>
          <WhatsApp />
        </div>
      </div>
    </div>
  );
}

export default App;
