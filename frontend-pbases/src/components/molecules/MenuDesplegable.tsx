import { ComboBox } from '../atoms/Combobox';

type MenuDespProps = {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
};

export const MenuDesp = ({ label, options, onSelect }: MenuDespProps) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    <ComboBox options={options} onChange={onSelect} />
  </div>
);
