import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { ContactUs } from "./pages/ContactUs";
import { NoMatch } from "./pages/NoMatch";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
