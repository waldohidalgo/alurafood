import { useState, createContext } from "react";

export const counterContext = createContext();

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider
      value={{
        count: count,
        suma() {
          setCount(count + 1);
        },
        resta: () => {
          setCount(count - 1);
        },
      }}
    >
      {props.children}
    </counterContext.Provider>
  );
};
