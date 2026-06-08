import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import products from "./Products";

function App() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((product) => product.category === category);

  return (
    <div className="container">
      <div className="logo">
        <h1>Product Store</h1>

        <p>Browse our collection of products</p>
      </div>
      <Navbar category={category} setCategory={setCategory} />

      <p>Showing {filteredProducts.length} products</p>

      <div className="card-container">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            imgURL={product.imgURL}
            name={product.name}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
