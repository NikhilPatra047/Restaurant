import OrderPage from "./pages/OrderPage";
import CurrentOrder from "./pages/CurrentOrder";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<OrderPage />} />
          <Route exact path="/current-order" element={<CurrentOrder />} />
          <Route exact path="/success" element={<SuccessPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
