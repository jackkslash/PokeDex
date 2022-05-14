import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.css";
import { ReactQueryDevtools } from 'react-query/devtools'
const qClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <QueryClientProvider client={qClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
  </React.StrictMode>
);
