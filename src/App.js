import OrderPage from "./pages/OrderPage";
import CurrentOrder from "./pages/CurrentOrder";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<OrderPage />} />
          <Route exact path="/current-order" element={<CurrentOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
