import { TablaHeader } from '../atoms/TablaHeads';
import { TablaFila } from '../atoms/TablaFila';

type DataTableProps = {
  headers: string[];
  rows: Record<string, any>[];
};

export const DataTable = ({ headers, rows }: DataTableProps) => (
  <table className="table table-striped table-bordered">
    <TablaHeader headers={headers} />
    <tbody>
      {rows.map((row, i) => (
        <TablaFila key={i} headers={headers} row={row} />
      ))}
    </tbody>
  </table>
);
