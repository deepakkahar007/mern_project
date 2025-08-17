import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import ReactQuery from "./context/ReactQuery.tsx";
import "./index.css";
import { routes } from "./pages/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQuery>
      <RouterProvider router={routes} />
    </ReactQuery>
  </StrictMode>
);
