function Product({ id, name, category, count, available }) {
  return (
    <div>
      {id} - {name} - {category} - {count} - {available}
    </div>
  );
}

export default Product;
