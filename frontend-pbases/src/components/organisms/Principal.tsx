import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Table, Badge } from "react-bootstrap";

type DashboardProps = {
    mysqlConectado: boolean;
    oracleConectado: boolean;
    bitacora: { tabla: string; operacion: string; fecha: string; estado: string }[];
};

const Principal: React.FC<DashboardProps> = ({ mysqlConectado, oracleConectado, bitacora }) => {
    return (
        <Container className="mt-4">
            <h2>Dashboard - Replicación de Clínicas</h2>

            {/* Estado de conexión */}
            <Row className="mb-4">
                <Col md={6}>
                    <Card className="p-3">
                        <h5>Estado de conexión</h5>
                        <Badge bg={mysqlConectado ? "success" : "danger"}>
                            {mysqlConectado ? "MySQL conectado" : "MySQL sin conexión"}
                        </Badge>
                        <Badge bg={oracleConectado ? "success" : "danger"} className="ms-2">
                            {oracleConectado ? "Oracle conectado" : "Oracle sin conexión "}
                        </Badge>
                    </Card>
                </Col>
            </Row>

            {/* Botón de replicación manual */}
            <Row className="mb-4">
                <Col md={6}>
                    <Card className="p-3">
                        <h5>Forzar replicación manual</h5>
                        <Button>Forzar replicación</Button>
                    </Card>
                </Col>
            </Row>

            {/* Tabla de bitácora */}
            <Row>
                <Col md={8}>
                    <Card className="p-3">
                        <h5>Visualizar bitácora</h5>
                        {bitacora.length === 0 ? (
                            <p>No hay registros en la bitácora</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tabla</th>
                                        <th>Operación</th>
                                        <th>Fecha</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bitacora.slice(0, 10).map((registro, index) => (
                                        <tr key={index}>
                                            <td>{registro.tabla}</td>
                                            <td>{registro.operacion}</td>
                                            <td>{registro.fecha}</td>
                                            <td>{registro.estado}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </Card>
                </Col>
            </Row>

            {/* Botón para ir a la pantalla de CRUD */}
            <Row className="mt-4">
                <Col md={6}>
                    <Link to="/crud">
                        <Button>Gestionar Tablas</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Principal;