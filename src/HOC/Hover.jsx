import UpdatedWith from "./myHoc";

const Hover = ({ count, setCount }) => {
  return (
    <div>
      <h1>Hover</h1>
      <button onMouseOver={setCount}>Hovered {count} times</button>
    </div>
  );
};

export default UpdatedWith(Hover);
