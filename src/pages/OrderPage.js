import NavbarComponent from "../components/NavbarComponent";
import CardComponent from "../components/CardComponent";
import { data } from "../data";

function OrderPage() {
    return (
        <>
            <NavbarComponent />
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "space-evenly", boxSizing: "border-box"}}>
                <div className="row">
                    {data.map((item) => {
                        const { id, foodTitle, price } = item;
                        return (
                            <div className="col" style={{marginTop: "2em"}}>
                                <CardComponent value={{ key: id, title: foodTitle, cost: price }} />
                            </div>
                        );
                    })};
                </div>
            </div>
        </>
    );
};

export default OrderPage;