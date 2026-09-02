import React, { useState } from "react";

import Child from "../Child/Child";

export default function Parent() {
  let productInfo = {
    id: 1,
    prodName: "Samsung",
    price: 5000,
    desc: "Smart Phone & TV",
    Quantity: 250,
    onSale: true,
  };

  let [product, setProduct] = useState(productInfo);

  return (
    <>
      <div className="text-2xl bg-dark p-4 text-light text-center mb-2">
        <h1>Parent</h1>
        <Child productDetails={product} />
      </div>
    </>
  );
}
