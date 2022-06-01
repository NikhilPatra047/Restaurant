import NavbarComponent from "../components/NavbarComponent";
import CardComponent from "../components/CardComponent";
import { data } from "../data";

function OrderPage() {
    return (
        <>
            <NavbarComponent />
            <div className="container-fluid">
                <div className="d-flex flex-row flex-wrap row row-eq-height align-items-end justify-content-around">
                    {data.map((item) => {
                        const { id, foodTitle, price, description } = item;
                        return (
                            <div className="col" style={{marginTop: "2em"}}>
                                <CardComponent value={{ key: id, title: foodTitle, cost: price, desc: description }} />
                            </div>
                        );
                    })};
                </div>
            </div>
        </>
    );
};



export default OrderPage;