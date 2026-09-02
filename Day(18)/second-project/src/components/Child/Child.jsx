export default function Child({ productDetails }) {
  let { prodName, price, desc, Quantity, onSale } = productDetails;

  return (
    <>
      <div className="text-2xl bg-info p-4 text-light text-center">
        <h1>Child</h1>
        <div className="text-2xl p-4">
          <h3>Product Name: {prodName}</h3>
          <h3>Product Price: {price}</h3>
          <h3>Product Description: {desc}</h3>
          <h3>Product Quantity: {Quantity}</h3>
          <h3>Sale: {onSale ? "50%" : "N/A"}</h3>
        </div>
      </div>
    </>
  );
}
