import NavbarComponent from "../components/NavbarComponent";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function SuccessPage() {
    return (
        <>
            <NavbarComponent />
            <div className="d-flex justify-content-center align-items-center" 
            style={{margin: "0 auto", width: "80%", height: "90vh"}}>

                <div>
                    <Card style={{width: "100%"}}>
                        <Card.Body>
                            <Card.Title style={{textAlign: "center"}}>
                                Your order has been successfully placed!
                            </Card.Title>
                            <div style={{margin: "2em auto 0 auto", display: "flex", width: "80%", justifyContent: "space-around"}}>                                
                                <Link to="/"><Button variant="primary">Go back</Button></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </>
    );
};

export default SuccessPage;