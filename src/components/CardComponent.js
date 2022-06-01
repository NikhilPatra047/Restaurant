import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function CardComponent({ value }) {
    const { title, cost, desc } = value;

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate("/current-order", {state: title}, { replace: false });
    };

    return (
        <Card style={{ width: '18rem', border: "0.5px solid black" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>

                <Card.Text>
                    <strong>Price: Rs {cost}</strong>
                </Card.Text>
                <Button variant="primary" onClick={handleRoute}>Order Now</Button>
            </Card.Body>
        </Card>
    );
};

export default CardComponent;