import Navbar from "./components/Navbar";
import Card from "./components/Card";
import products from "./Products";

function createCard(products) {
  return (
    <Card
      key={products.id}
      img={products.img}
      name={products.name}
      price={products.price}
      category={products.category}
    />
  );
}

function App() {
  return (
    <div>
      <div classname="logo">
        <h1>Product Store!</h1>

        <p>Browse our collection of products</p>
      </div>
      <Navbar />

      <p>Showing 10 products</p>

      {products.map(createCard)}
    </div>
  );
}

export default App;
