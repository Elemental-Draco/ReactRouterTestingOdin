import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Shopping from "./components/Shopping";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => {
  console.log("app render");
  const [products, setProducts] = useState([]);
  return (
    <>
      <Header products={products} />
      <div className="mt-24">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route
            path="shopping"
            element={<Shopping products={products} setProducts={setProducts} />}
          ></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
