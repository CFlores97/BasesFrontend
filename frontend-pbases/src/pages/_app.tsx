import "@/styles/globals.css";
import { useEffect, useState } from 'react';
import { SelectorPanel } from '@/components/organisms/MenuDespCompleto';
import { DualTables } from '@/components/organisms/AmbasTablas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { AppProps } from "next/app";


const opciones = ['empleados', 'productos'];

export default function App({ Component, pageProps }: AppProps) {
  const [opcion, setOpcion] = useState(opciones[0]);
  const [config, setConfig] = useState({
    mysql: { headers: [], rows: [] },
    oracle: { headers: [], rows: [] }
  });

  useEffect(() => {
    const fetchData = async () => {
      const [resMysql, resOracle] = await Promise.all([
        fetch(`/api/mysql/${opcion}`).then(r => r.json()),
        fetch(`/api/oracle/${opcion}`).then(r => r.json())
      ]);

      setConfig({
        mysql: { headers: resMysql.headers, rows: resMysql.data },
        oracle: { headers: resOracle.headers, rows: resOracle.data }
      });
    };

    fetchData();
  }, [opcion]);

  return (
    <main className="container mt-4">
      <SelectorPanel options={opciones} onChange={setOpcion} />
      <DualTables mysql={config.mysql} oracle={config.oracle} />
    </main>
  );

}
