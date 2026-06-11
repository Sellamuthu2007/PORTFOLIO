import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Projects from "../src/pages/Projects";
import Homepage from "./pages/homePage.jsx";
import Notfound from "./components/notfound.jsx";
import Achievement from "./pages/achievements.jsx";
import Skills from "./pages/Skills.jsx";
import Education from "./pages/educations";
import Experience from "./pages/experience";

const urls = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Notfound />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/hackathons",
      element: <Achievement />,
    },
    {
      path: "/educations",
      element: <Education />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/experience",
      element: <Experience />,
    },
  ],
  {
    basename: "/PORTFOLIO", // 👈 THIS FIXES THE "NO ROUTES MATCHED" RECTIFIER EXCEPTION
  },
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={urls} />
  </StrictMode>,
);
