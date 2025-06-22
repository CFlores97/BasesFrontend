type TablaFilProps = {
  headers: string[];
  row: Record<string, any>;
};

export const TablaFila = ({ headers, row }: TablaFilProps) => (
  <tr>
    {headers.map((h, i) => <td key={i}>{row[h]}</td>)}
  </tr>
);
