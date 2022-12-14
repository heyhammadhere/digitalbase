import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Views/Login";
import DashboardLayout from "./Layout/DashboardLayout";
import {
  Youtube,
  Seo,
  MusicEngine,
  Payments,
  Settings,
  Profile,
  Logout,
} from "./Views/Dashboard";
import { Privacy, Terms } from "./Views/static";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/login" element={<Login />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-services" element={<Terms />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Youtube />} />
          <Route path="seo" element={<Seo />} />
          <Route path="music" element={<MusicEngine />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="*" element="404 Not Found" />
      </RoutesWrapper>
    </BrowserRouter>
  );
};

export default Routes;
