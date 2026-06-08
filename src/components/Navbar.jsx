import Button from "./Button";

function Navbar({ category, setCategory }) {
  return (
    <div>
      <h4>FILTER BY CATEGORY </h4>

      <Button category={category} setCategory={setCategory} />
    </div>
  );
}

export default Navbar;
