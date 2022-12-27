import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

const AuthWrapper = ({ children }) => {
  return (
    <Row className="justify-content-center">
      <Col lg={4} md={6} sm={8}>
        <Card>
          <CardHeader className="text-center">Register</CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default AuthWrapper;
