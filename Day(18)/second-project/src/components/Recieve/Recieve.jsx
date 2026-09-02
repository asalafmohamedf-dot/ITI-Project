export default function Recieve({ productDetails, deletproduct }) {
  let { id, prodName, price, desc, quantity, onSale } = productDetails;

  return (
    <>
      <div className="col-md-3">
        <div className="item bg-secondary p-4 text-light h-100 position-relative">
          <h3>Product Name: {prodName}</h3>
          <h3>Product Price: {price}</h3>
          <h3>Product Quantity: {quantity}</h3>
          <h3>Product Description: {desc}</h3>
          <span className="badge bg-danger p-2 position-absolute top-0 end-0">
            {onSale ? "Sale" : ""}
          </span>
          <div className="d-flex justify-content-evenly my-3">
            <button className="btn btn-danger" onClick={() => deletproduct(id)}>
              Delete
            </button>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </>
  );
}
