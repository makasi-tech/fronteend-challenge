//React imports
import { Routes, Route } from "react-router-dom";

//Page imports
import { Home } from "@/pages/home";
import { Profile } from "@/pages/profile";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default RoutesApplication;
