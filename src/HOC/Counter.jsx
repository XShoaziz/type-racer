import UpdatedWith from "./myHoc";

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <h1>Counter</h1>
      <button onClick={setCount}>Clicked {count} times</button>
    </div>
  );
};

export default UpdatedWith(Counter);
