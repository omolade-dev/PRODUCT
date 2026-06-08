function Button({ category, setCategory }) {
  return (
    <div className="btn">
      <button
        className={category === "All" ? "active" : ""}
        onClick={() => setCategory("All")}
      >
        All
      </button>
      <button
        className={category === "Electronics" ? "active" : ""}
        onClick={() => setCategory("Electronics")}
      >
        Electronics
      </button>
      <button
        className={category === "Footwear" ? "active" : ""}
        onClick={() => setCategory("Footwear")}
      >
        Footwear
      </button>
      <button
        className={category === "Sports" ? "active" : ""}
        onClick={() => setCategory("Sports")}
      >
        Sports
      </button>
      <button
        className={category === "Home" ? "active" : ""}
        onClick={() => setCategory("Home")}
      >
        Home
      </button>
      <button
        className={category === "Accessories" ? "active" : ""}
        onClick={() => setCategory("Accessories")}
      >
        Accessories
      </button>
    </div>
  );
}

export default Button;
