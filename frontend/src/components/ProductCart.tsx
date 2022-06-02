import { Card, ListGroup, Row, Col } from "react-bootstrap";
import "../style.css";

export interface Props {
  imageUrl: string;
  title: string;
  price: number;
  quantity: number;
  name: string;
}
function ProductCart(props: Props) {
  return (
    <Card style={{ width: "23rem" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>Price: {props.price}</ListGroup.Item>
              <ListGroup.Item>Quantity: {props.quantity}</ListGroup.Item>
              <ListGroup.Item>
                Total: {props.quantity * props.price}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Card.Img
              className="product-cart-image"
              variant="top"
              src={props.imageUrl}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ProductCart;
