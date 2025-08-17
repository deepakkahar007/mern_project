import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Layout from "./Layout";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<App />} />
    </Route>
  )
);
