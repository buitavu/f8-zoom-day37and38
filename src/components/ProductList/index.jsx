function ProductList() {
  const products = ["iPhone", "Samsung", "Xiaomi"];

  return (
    <div>
      <h3>Products</h3>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  );
}

export default ProductList;
