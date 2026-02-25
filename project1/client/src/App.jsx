import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FindConsultant from "./pages/FindConsultant";
import HowWork from "./pages/HowWork";
import Blog from "./pages/Blog";
import Price from "./pages/Price";
import AsConsultant from "./pages/BecomeConsultants/AsConsultant";
function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <hr className="opacity-30" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-consultant" element={<FindConsultant />} />
          <Route path="/how-it-works" element={<HowWork />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/pricing" element={<Price />} />
          <Route path="/as-consultant" element={<AsConsultant />} />
        </Routes>
      </div>
      <hr className="h-30 opacity-30 " />
      <Footer />
    </div>
  );
}

export default App;
