import { Container, Col, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout(props) {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col xs={12} sm={4} lg={2} className="p-0">
            <Sidebar />
          </Col>
          <Col xs={12} sm={8} lg={10}>
            {props.children}
          </Col>
        </Row>
      </Container>
    </>
  );
}
