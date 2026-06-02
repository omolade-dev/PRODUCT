import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div classname="logo">
        <h1>Product Store!</h1>

        <p>Browse our collection of products</p>

        <Navbar />

        <p>Showing 10 products</p>
      </div>
    </div>
  );
}

export default App;
