import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import LoginPage from "./Login";
import ForgotPassword from "./ForgotPassword";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot" element={<ForgotPassword />} />
    </Route>
  )
);
