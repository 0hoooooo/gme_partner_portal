import { BrowserRouter, Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/auth/Login";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/auth/Profile";

const Routes = () => {
  const rootRoutes = {
    path: "/",
    element: <Navigate to="/main/home" />,
  };
  const noMatchRoutes = {
    path: "*",
    elemt: <Navigate to="/main/home" />,
  };
  const mainRoutes = {
    path: "/main",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  };
  const profileRoutes = {
    path: "/mypage",
    elment: <MainLayout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  };
  const authRoutes = {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  };
  const routes = [
    rootRoutes,
    noMatchRoutes,
    mainRoutes,
    profileRoutes,
    authRoutes,
  ];

  return useRoutes(routes);
};
const Router = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
export default Router;
