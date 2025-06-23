import { TablaHeader } from '../atoms/TablaHeads';
import { TablaFila } from '../atoms/TablaFila';

type DataTableProps = {
    headers: string[];
    rows: Record<string, any>[];
};

export const Tabla = ({ headers, rows }: DataTableProps) => (
    <table className="table table-striped table-bordered">
        <TablaHeader headers={headers} />
        <tbody>
            {rows.length > 0 ? (
                rows.map((row, i) => (
                    <TablaFila key={i} headers={headers} row={row} />
                ))
            ) : (
                <tr>
                    <td colSpan={headers.length || 1} className="text-center text-muted">
                        Sin datos disponibles
                    </td>
                </tr>
            )}
        </tbody>
    </table>
);
