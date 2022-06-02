import { Button, Card, ListGroup } from "react-bootstrap";

export interface Props {
  subtotal: number;
  shipping: number | string;
  discount: number;
  total: number;
}

function Summary(props: Props) {
  return (
    <Card border="dark" style={{ width: "23rem" }}>
      <Card.Header>Summary</Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Subtotal: $ {props.subtotal}</ListGroup.Item>
          <ListGroup.Item>Shipping fee: {props.shipping}</ListGroup.Item>
          <ListGroup.Item>Discount: {props.discount}</ListGroup.Item>
          <ListGroup.Item>Total: {props.total}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary">Checkout</Button>
      </Card.Body>
    </Card>
  );
}

export default Summary;
