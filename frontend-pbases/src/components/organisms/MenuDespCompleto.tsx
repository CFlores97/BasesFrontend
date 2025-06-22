import { MenuDesp } from '../molecules/MenuDesplegable';

type SelectorPanelProps = {
  options: string[];
  onChange: (value: string) => void;
};

export const SelectorPanel = ({ options, onChange }: SelectorPanelProps) => (
  <section className="mb-3">
    <h5>Seleccionar tabla</h5>
    <MenuDesp label="Tabla" options={options} onSelect={onChange} />
  </section>
);
