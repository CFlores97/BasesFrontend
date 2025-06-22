type TablaHeaderProps = {
  headers: string[];
};

export const TablaHeader = ({ headers }: TablaHeaderProps) => (
  <thead>
    <tr>
      {headers.map((h, i) => <th key={i}>{h}</th>)}
    </tr>
  </thead>
);
