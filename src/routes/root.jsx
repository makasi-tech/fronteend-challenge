import { createBrowserRouter } from "react-router-dom";
import { Profile, Home, ErrorPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:username",
    element: <Profile />,
  },
]);
