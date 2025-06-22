import { DataTable } from '../molecules/Tabla';

type TablaConfig = {
  headers: string[];
  rows: Record<string, any>[];
};

type DualTablesProps = {
  mysql: TablaConfig;
  oracle: TablaConfig;
};

export const DualTables = ({ mysql, oracle }: DualTablesProps) => (
  <div className="d-flex gap-4 flex-wrap">
    <div>
      <h6>MySQL</h6>
      <DataTable headers={mysql.headers} rows={mysql.rows} />
    </div>
    <div>
      <h6>Oracle</h6>
      <DataTable headers={oracle.headers} rows={oracle.rows} />
    </div>
  </div>
);