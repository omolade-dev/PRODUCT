import Navbar from "./components/Navbar";

function App(props) {
  return (
    <div>
      <div classname="logo">
        <h1>Product Store!</h1>

        <p>Browse our collection of products</p>
      </div>
      <Navbar />

      <p>Showing 10 products</p>
      <div className="card">
        <div className="top">{props.img}</div>

        <div className="bottom">
          <div>
            <h3>{props.name}</h3>
            <p>{props.category}</p>
          </div>

          <div>
            <h3>{props.price}</h3>
            <p>In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
