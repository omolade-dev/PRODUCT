import Button from "./Button";

function Navbar(props) {
  return (
    <div>
      <h4>FILTER BY CATEGORY </h4>

      <Button
        electronics={props.electronics}
        clothing={props.clothing}
        home={props.home}
        books={props.books}
        accessories={props.accessories}
      />
    </div>
  );
}

export default Navbar;
