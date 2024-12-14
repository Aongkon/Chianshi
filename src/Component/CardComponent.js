import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import State from "./State/State";

const CardComponent = (props) => {
  const { title, desc,} = props;
  return (
    <div className="forGrid">
      <Card id="card" style={{ width: "18rem", background:"#17cbdc"}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body id="cardBody">
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ marginTop: "-20px" }}>{desc}</Card.Text>
          
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default CardComponent;
