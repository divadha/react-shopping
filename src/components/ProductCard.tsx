import { Card } from "react-bootstrap";
import "../style.css";

export interface Props {
  imageUrl: string;
  title: string;
  price: number;
  name: string;
}
function ProductCard(props: Props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="product-card-image"
        variant="top"
        src={props.imageUrl}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
        <a href={"/product/" + props.name} className="stretched-link">
          {" "}
        </a>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
