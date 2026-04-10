import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // ✅ already imported
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AdminContextProvider from "./context/AdminContextProvider.jsx";

const root = createRoot(document.getElementById("root")); // use imported createRoot
root.render(
  <AdminContextProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </AdminContextProvider>
);