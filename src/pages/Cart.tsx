import { Card, Col, Container, Row } from "react-bootstrap";
import Summary from "../components/Summary";
import CartList from "../containers/CartList";

function Cart() {
  return (
    <Card border="primary" style={{ width: "55rem" }}>
      <Card.Header>Sopping Cart List</Card.Header>
      <Row>
        <Col>
          <CartList />
        </Col>
        <Col>
          <Summary subtotal={120} shipping="free" discount={-10} total={120} />
        </Col>
      </Row>
    </Card>
  );
}

export default Cart;
