function Card(props) {
  return (
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
  );
}

export default Card;
