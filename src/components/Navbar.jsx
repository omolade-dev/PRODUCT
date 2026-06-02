import Button from "./Button";

const categories = [
  "All",
  "Electronics",
  "Footwear",
  "Sports",
  "Books",
  "Accessories",
];

function Navbar() {
  return (
    <div>
      <h4>FILTER BY CATEGORY </h4>
      {categories.map((category) => (
        <Button key={category} name={category} />
      ))}
    </div>
  );
}

export default Navbar;
