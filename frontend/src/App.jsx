import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/auth/signup/SignupPage";
import LoginPage from "./pages/auth/login/LoginPage";
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import NotificationPage from "./pages/notification/NotificationPage";
// import ProfilePage from "./pages/profile/ProfilePage";
const App = () => {
  return (
    <div className="flex max-w-7xl mx-auto  min-h-screen">
      <Sidebar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        {/* <Route path="/profile/:username" element={<ProfilePage />} /> */}
      </Routes>
      <RightPanel />
    </div>
  );
};

export default App;
