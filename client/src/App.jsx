import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";
import Coding from "./pages/Coding";
import CodingQuestion from "./pages/CodingQuestion";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/setup" element={<Setup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/coding" element={<Coding />} />

        <Route
    path="/coding/question"
    element={<CodingQuestion />}
/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;