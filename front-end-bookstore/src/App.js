import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";
import AddBook from "./components/addBook";
import Order from "./components/order";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/addbook" element={<AddBook />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
