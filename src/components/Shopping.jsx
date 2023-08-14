import React from "react";
import ItemCard from "./ItemCard";

export default function Shopping({ setProducts, products }) {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  function makeItems(items = []) {
    return items.map((prod) => {
      return (
        <ItemCard
          key={prod.id}
          id={prod.id}
          itemName={prod.title}
          price={prod.price}
          imgUrl={prod.image}
          products={products}
          setProducts={setProducts}
        />
      );
    });
  }

  React.useEffect(() => {
    function getProducts() {
      setLoading(true);
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((fetchedProducts) => {
          setProducts(fetchedProducts.map((prod) => ({ ...prod, count: 0 })));
        })
        .catch((error) => {
          setError(error);
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    getProducts();
  }, []);

  return loading == true ? (
    <div className="text-4xl">Loading...</div>
  ) : (
    <>
      <div>
        <p>some content</p>
        <ul>
          <li>List of items</li>
          <li>List of stuff</li>
          <li>List of things</li>
        </ul>
        <div className="grid gap-4 grid-auto-fit">{makeItems(products)}</div>
      </div>
    </>
  );
}
