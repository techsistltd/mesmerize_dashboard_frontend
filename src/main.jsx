import { QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@fontsource/poppins";
import GlobalContext from "./Global/GlobalContext";
import { queryClient } from "./Utils/axiosApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        dense
        preventDuplicate
        maxSnack={3}
        autoHideDuration={5000}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <GlobalContext>
          <App />
        </GlobalContext>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
