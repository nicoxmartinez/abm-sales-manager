import { Link } from "react-router-dom";
import { ListGroup, Accordion } from "react-bootstrap";
import {
  FaDollyFlatbed,
  FaDumpster,
  FaHandHoldingUsd,
  FaStoreAlt,
  FaCashRegister,
  FaWallet,
} from "react-icons/fa";

const SidebarItem = ({ to, text, icon }) => (
  <Link to={to} style={{ textDecoration: "none" }}>
    <ListGroup.Item className="d-flex align-items-center gap-2">
      {icon}
      <span>{text}</span>
    </ListGroup.Item>
  </Link>
);

export default function Sidebar() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Body className="p-0 m-0">
          <ListGroup variant="flush" className="p-0 m-0">
            <SidebarItem to="/almacen" text="Almacén" icon={<FaDollyFlatbed />} />
            <SidebarItem to="/ecommerce" text="ECommerce" icon={<FaDumpster />} />
            <SidebarItem to="/financiacion" text="Financiación" icon={<FaHandHoldingUsd />} />
            <SidebarItem to="/local" text="Local" icon={<FaStoreAlt />} />
            <SidebarItem to="/medio-de-pago" text="Medio de Pago" icon={<FaWallet />} />
            <SidebarItem to="/punto-de-venta" text="Punto de Venta" icon={<FaCashRegister />} />
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}