function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <img className="img" src={props.imgURL} alt={props.name} />
      </div>

      <div className="bottom">
        <div>
          <h3>{props.name}</h3>
          <p>{props.category}</p>
        </div>

        <div>
          <h3>{props.price}</h3>
          <p style={{ color: props.inStock ? "green" : "red" }}>
            {props.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
