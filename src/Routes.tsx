import { Routes, Route } from "react-router-dom";
import App from "./pages/index";
import { ThemeProvider } from "./context";
import { ToastContainer } from "react-toastify";

export default function MainRoutes() {
  
  return (
    <ThemeProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </ThemeProvider>
  );
}
