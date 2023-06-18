import { Routes, Route } from "react-router-dom";
import "./App.css";
import SideNav from "./Components/SideNav";
import LandingPage from "./pages/landingPage/LandingPage";
import HabitListing from "./pages/HabitListing/HabitListing";
import EachHabitPage from "./pages/EachHabit/EachHabitPage";
import ArchivePage from "./pages/ArchivePage/ArchivePage";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <SideNav />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/habits" element={<HabitListing/>} />
        <Route path="/habits/:habitID" element={<EachHabitPage/>} />
        <Route path="/archive" element={<ArchivePage/>} />
      </Routes>
    </div>
  );
}

export default App;
