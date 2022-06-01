import { Card, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import { Link } from "react-router-dom";

function CurrentOrder() {

    const state = useLocation();
    const { id, title, cost } = state.state;
    return (
        <>
            <NavbarComponent />
            <div className="d-flex justify-content-center align-items-center"
                style={{ margin: "0 auto", width: "80%", height: "90vh" }}>

                <div>
                    <Card style={{ width: "100%" }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>
                                Do you want to confirm your order - <strong>{title}</strong> ?
                            </Card.Title>
                            <div style={{ margin: "2em auto 0 auto", display: "flex", width: "80%", justifyContent: "space-around" }}>
                                <Link to="/success"><Button variant="primary">Confirm Order</Button></Link>
                                <Link to="/"><Button variant="danger">Cancel Order</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </>
    );
};

export default CurrentOrder;
