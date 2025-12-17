import Agencies from "@/pages/agencies/Agencies";
import Login from "@/pages/auth/login/Login";
import Register from "@/pages/auth/register/Register";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import TourDetails from "@/pages/tourdetail/TourDetails";
import Tours from "@/pages/tours/Tours";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/agencies" element={<Agencies />} />
      <Route path="/tours" element={<Tours />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
