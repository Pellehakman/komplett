const ProductPage = (props) => {
  // const { category } = props.match.params;
const category = "graphics cards"
  return (
    <div>
      <h2>Products Page</h2>
      {category && (
        <div>
          <h3>Category: {category}</h3>
          {/* Render products for the selected category */}
        </div>
      )}
      {/* Add logic to fetch and display products based on the selected category */}
    </div>
  );
};

export default ProductPage;
