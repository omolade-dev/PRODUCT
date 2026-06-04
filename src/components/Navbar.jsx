function Navbar() {
  return (
    <div>
      <h4>FILTER BY CATEGORY </h4>

      <div className="btn">
        <button className="active">All</button>
        <button>Electronics</button>
        <button>Footwear</button>
        <button>Sports</button>
        <button>Books</button>
        <button>Accessories</button>
      </div>
    </div>
  );
}

export default Navbar;
