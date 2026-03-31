import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";

import HomePage from "./pages/HomePage/HomePage";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import NoticesPage from "./pages/NoticesPage/Noticespage.jsx";
import FriendsPage from "./pages/FriendsPage/FriendsPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import AddPetPage from "./pages/AddPetPage/AddPetPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="notices" element={<NoticesPage />} />
        <Route path="friends" element={<FriendsPage />} />

        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/profile">
              <RegisterPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/profile">
              <LoginPage />
            </RestrictedRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute redirectTo="/login">
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path="add-pet"
          element={
            <PrivateRoute redirectTo="/login">
              <AddPetPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
