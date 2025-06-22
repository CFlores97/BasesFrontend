type ComboBoxProps = {
  options: string[];
  onChange: (value: string) => void;
};

export const ComboBox = ({ options, onChange }: ComboBoxProps) => (
  <select className="form-select" onChange={e => onChange(e.target.value)}>
    {options.map((opt, i) => (
      <option key={i} value={opt}>{opt}</option>
    ))}
  </select>
);
