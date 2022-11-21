import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handleReset");
  };
  const handleIncrement = (id) => {
    const countersIncrement = counters.map((el) =>
      el.id === id ? { ...el, value: el.value + 1 } : el
    );
    setCounters(countersIncrement);
    // setValue((prevState) => prevState + 1);
  };
  const handleDecrement = (id) => {
    const countersDecrement = counters.map((el) =>
      el.id === id && el.value > 0 ? { ...el, value: el.value - 1 } : el
    );
    setCounters(countersDecrement);
    // setValue((prevState) => {
    //   return value > 0 ? prevState - 1 : prevState;
    // });
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          // id={count.id}
          // value={count.value}
          // name={count.name}
          // couter={count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CounterList;
