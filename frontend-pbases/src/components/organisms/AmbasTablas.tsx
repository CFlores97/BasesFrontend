import { Tabla } from '../molecules/Tabla';

type TablaConfig = {
    rows: Record<string, any>[];
};

type AmbasTablasProps = {
    mysql: TablaConfig;
    oracle: TablaConfig;
};

const mockmysql = {
  rows: [
    { id: 1, nombre: "Carmen", edad: 25 },
    { id: 2, nombre: "Luis", edad: 30 },
  ],
};

const mockoracle = {
  rows: [
    { id: 1, nombre: "Mendoza", ciudad: "Tegucigalpa" },
    { id: 2, nombre: "Ramírez", ciudad: "San Pedro Sula" },
  ],
};

const replicar = () => {
    alert("Replicando datos.");
  };

export const AmbasTablas = ({ mysql, oracle }: AmbasTablasProps) => (
    <div className="d-flex gap-4 flex-wrap justify-content-center text-center">
        <div>
            <h6>MySQL</h6>
            <Tabla rows={mysql.rows} />
        </div>
        <div className="d-flex flex-column justify-content-center my-4">
            <button className="btn btn-primary" style={{ marginBottom: "1.5rem" }}  onClick={replicar}> Replicar a MYSQL </button>
            <button className="btn btn-primary" style={{ marginBottom: "1.5rem" }}  onClick={replicar}> Replicar a ORACLE </button>
        </div>
        <div>
            <h6>Oracle</h6>
            <Tabla rows={oracle.rows} />
        </div>
    </div>
);