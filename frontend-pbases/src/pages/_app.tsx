import "@/styles/globals.css";
import { useEffect, useState } from 'react';
import { SelectorPanel } from '@/components/organisms/MenuDespCompleto';
import { AmbasTablas } from '@/components/organisms/AmbasTablas';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from "next/app";

/* para que se mire el label en el cbx y haga el fetch con el nombre de la tabla*/
const opciones = [
  { label: 'Paciente', value: 'paciente' },
  { label: 'Clínica', value: 'clinica' },
  { label: 'Doctor', value: 'doctor' },
  { label: 'Cita', value: 'cita' },
  { label: 'Historial Médico', value: 'historial_medico' },
  { label: 'Receta', value: 'receta' },
  { label: 'Medicamento', value: 'medicamento' },
  { label: 'Receta Medicamento', value: 'receta_medicamento' },
];

export default function App({ Component, pageProps }: AppProps) {
  const [opcion, setOpcion] = useState<string>(opciones[0].value);
  const [config, setConfig] = useState({
    mysql: { rows: [] },
    oracle: { rows: [] }
  });

  useEffect(() => {
    const getDatos = async () => {
      const [resMysql, resOracle] = await Promise.all([
        fetch(`/list/mysql/${opcion}`).then(r => r.json()),
        fetch(`/list/oracle/${opcion}`).then(r => r.json())
      ]);

      setConfig({
        mysql: { rows: resMysql.data },
        oracle: { rows: resOracle.data }
      });
    };

    getDatos();
  }, [opcion]);

  return (
    <main className="container mt-4">
      <SelectorPanel
        options={opciones.map(op => op.label)}
        onSelect={(labelSeleccionado: string) => {
          const seleccion = opciones.find(o => o.label === labelSeleccionado);
          if (seleccion) setOpcion(seleccion.value);
        }} />
      <AmbasTablas mysql={config.mysql} oracle={config.oracle} />
    </main>
  );

}
