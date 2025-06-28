import { TablaHeader } from '../atoms/TablaHeads';
import { TablaFila } from '../atoms/TablaFila';

type DatosTablaProps = {
    rows: Record<string, any>[];
};

export const Tabla = ({ rows }: DatosTablaProps) => {
    const agarrarHeaders = rows.length > 0 ? Object.keys(rows[0]) : [];
    const mostrarHeaders = agarrarHeaders.map(h => h.toUpperCase());;
    const mostrarRows = rows.slice(0, 5); /*solo mostrar cinco registros*/ 

  return (
    <table className="table table-striped table-bordered">
      <TablaHeader headers={mostrarHeaders} />
      <tbody>
        {mostrarRows.length > 0 ? (
          mostrarRows.map((row, i) => (
            <TablaFila key={i} headers={agarrarHeaders} row={row} />
          ))
        ) : (
          <tr>
            <td colSpan={mostrarHeaders.length || 1} className="text-center text-muted">
              Sin datos disponibles
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
