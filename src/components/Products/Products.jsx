import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Product from "./Product/Product";

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cola",
      category: "Suc",
      count: 10,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Kinder",
      category: "Dulciuri",
      count: 120,
      isAvailable: true,
    },
    {
      id: 3,
      name: "Pampers",
      category: "Children",
      count: 500,
      isAvailable: false,
    },
  ]);

  return (
    <div>
      Products:
      <ul>
        {products.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            category={product.category}
            count={product.count}
            available={product.isAvailable ? "yes" : "no"}
          />
        ))}
      </ul>
    </div>
  );
}

// function add(a, b) {
//     return a + b;
// }
// const y = add(2, 3);
// const z = add(3, 3);

// Product(a,b)

//props

{
  /* <TextField label="Outlined secondary" color="secondary" focused /> */
}

export default Products;
