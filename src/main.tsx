//React imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Style imports
import { GlobalStyle } from "@/styles/Global";

//Components imports
import { NavBar } from "@/components/Navbar";

//Routes imports
import RoutesApplication from "./routes";

//Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Providers imports
import { Contexts } from "./context/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle>
        <Contexts>
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <NavBar />
          <RoutesApplication />
        </Contexts>
      </GlobalStyle>
    </BrowserRouter>
  </React.StrictMode>
);
