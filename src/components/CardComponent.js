import { Card, Button } from "react-bootstrap";

function CardComponent({ value }) {
    const { key, title, cost, desc } = value;

    return (
        <Card style={{ width: '18rem', border: "0.5px solid black"}}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>

                <Card.Text>
                    <strong>Price: Rs {cost}</strong>
                </Card.Text>
                <Button variant="primary">Order Now</Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;