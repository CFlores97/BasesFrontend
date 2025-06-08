import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "@/components/organisms/Principal";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Router>
      <Routes>
        {/* principal */}
        <Route path="/" element={<Principal mysqlConectado={true}
          oracleConectado={false}
          bitacora={[]} />} />

      </Routes>
    </Router>
  );
}
