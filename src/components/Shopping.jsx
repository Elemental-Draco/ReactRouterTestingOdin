import React from "react";

export default function Shopping(props) {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    function getProducts() {
      setLoading(true);
      fetch("https://fakestoreapi.com/products/category/jewelery")
        .then((res) => res.json())
        .then((fetchedProducts) => {
          setProducts(fetchedProducts);
          console.log(fetchedProducts);
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
      </div>
    </>
  );
}
