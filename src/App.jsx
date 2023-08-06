import { Link, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Shopping from "./components/Shopping";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <div className="mt-24">
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="shopping" element={<Shopping />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
