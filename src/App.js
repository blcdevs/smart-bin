import Dashboard from "./Screens/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import NewPassword from "./components/Auth/ResetPassword/NewPassword";
import Confirmation from "./components/Auth/ResetPassword/Confirmation";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
