import Navbar from "./components/Navbar";
import Card from "./components/Card";
import products from "./Products";

function App() {
  return (
    <div>
      <div className="logo">
        <h1>Product Store!</h1>

        <p>Browse our collection of products</p>
      </div>
      <Navbar />

      <p>Showing 13 products</p>

      <div className="container">
        {products.map((products) => (
          <Card
            key={products.id}
            imgURL={products.imgURL}
            name={products.name}
            price={products.price}
            category={products.category}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
