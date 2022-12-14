import { useState } from "react";

const UpdatedWith = (Component) => {
  const Updated = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prev) => prev + 1);
    };
    return <Component count={count} setCount={increment} />;
  };
  return Updated;
};
export default UpdatedWith;
