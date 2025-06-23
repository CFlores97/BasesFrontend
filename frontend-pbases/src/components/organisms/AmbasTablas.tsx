import { Tabla } from '../molecules/Tabla';

type TablaConfig = {
    headers: string[];
    rows: Record<string, any>[];
};

type AmbasTablasProps = {
    mysql: TablaConfig;
    oracle: TablaConfig;
};

const mockmysql: TablaConfig = {
  headers: ["ID", "Nombre", "Edad"],
  rows: [
    { ID: 1, Nombre: "Carmen", Edad: 25 },
    { ID: 2, Nombre: "Luis", Edad: 30 },
  ],
};

const mockoracle: TablaConfig = {
  headers: ["ID", "Nombre", "Ciudad"],
  rows: [
    { ID: 1, Nombre: "Mendoza", Ciudad: "Tegucigalpa" },
    { ID: 2, Nombre: "Ramírez", Ciudad: "San Pedro Sula" },
  ],
};

const replicar = () => {
    alert("Replicando datos.");
  };

export const AmbasTablas = ({ mysql, oracle }: AmbasTablasProps) => (
    <div className="d-flex gap-4 flex-wrap">
        <div>
            <h6>MySQL</h6>
            <Tabla headers={mysql.headers} rows={mysql.rows} />
        </div>
        <div className="d-flex flex-column justify-content-center my-4">
            <button className="btn btn-primary" style={{ marginBottom: "1.5rem" }}  onClick={replicar}> Replicar Tabla </button>
        </div>
        <div>
            <h6>Oracle</h6>
            <Tabla headers={oracle.headers} rows={oracle.rows} />
        </div>
    </div>
);