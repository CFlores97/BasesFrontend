import { MenuDesp } from '../molecules/MenuDesplegable';

type SelectorPanelProps = {
  options: string[];
  onSelect: (labelSeleccionado: string) => void;
};

export const SelectorPanel = ({ options, onSelect }: SelectorPanelProps) => (
  <section className="mb-3">
    <h5  style={{ marginBottom: "1.5rem" }}>Seleccione la tabla de los datos a ver</h5>
    <MenuDesp label="Tabla" options={options} onSelect={onSelect} />
  </section>
);
