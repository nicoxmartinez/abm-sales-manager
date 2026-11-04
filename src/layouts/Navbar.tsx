import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { FaUserCircle, FaDoorOpen, FaUserAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <h1 className="navbar-brand">
        Sales Manager
      </h1>
      <span className="d-flex ms-auto">
        <Dropdown>
          <Dropdown.Toggle variant="" bsPrefix="p-0">
            <div className="d-flex mt-3">
              <FaUserCircle
                style={{
                  fontSize: "30px",
                  color: "white",
                  marginRight: "15px",
                }}
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as="span">
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FaUserAlt /> Mi perfil
              </Link>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => console.log("Cerrar sesión")}
              style={{ textDecoration: "none", color: "black" }}
            >
              <FaDoorOpen /> Cerrar sesión
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </span>
    </nav>
  );
}
