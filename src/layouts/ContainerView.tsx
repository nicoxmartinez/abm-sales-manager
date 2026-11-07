import React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface ContainerViewProps {
    children: React.ReactNode;
    title?: string;
    fluid?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
    className?: string;
}

const ContainerView: React.FC<ContainerViewProps> = ({
    children,
    title,
    fluid = false,
    className = "mt-4 mb-5",
}) => {
    return (
        <Container fluid={fluid} className={className}>
            {title && (
                <Row className="mb-4">
                    <Col>
                        <h2 className="fw-bold">{title}</h2>
                        <hr />
                    </Col>
                </Row>
            )}
            {children}
        </Container>
    );
};

export { ContainerView };