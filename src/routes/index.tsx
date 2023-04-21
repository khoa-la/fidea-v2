import { Suspense, lazy, ElementType } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
// layouts
import MainLayout from "../layouts/main";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={""}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Home />, index: true },
        { path: "living-rooms", element: <LivingRoom /> },
        // { path: 'contact-us', element: <Contact /> },
        // { path: 'faqs', element: <Faqs /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

// MAIN
const Home = Loadable(lazy(() => import("../pages/Home")));
const LivingRoom = Loadable(lazy(() => import("../pages/LivingRoom")));
