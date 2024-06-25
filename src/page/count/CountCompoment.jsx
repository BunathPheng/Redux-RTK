import React from "react";
import { Button } from "flowbite-react";
import { increment } from "../../redux/feature/counterSilce/conterSilce";
import { decrement } from "../../redux/feature/counterSilce/conterSilce";
import { incrementByAmount } from "../../redux/feature/counterSilce/conterSilce";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function CountCompoment() {
  const [amout, setamout] = useState(10);
  const items = useSelector((state) => state.conterReducer.values);
  console.log("items", items);
  const dispatch = useDispatch();
  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleIncrementByAmout() {
    dispatch(incrementByAmount(amout));
  }
  return (
    <>
      <h1 className="text-[2rem] text-blue-500 font-bold text-center">
        This is function to count values
      </h1>
      <p className="text-[2rem] text-blue-500 font-bold text-center">{items}</p>
      <div className="flex justify-center items-start gap-3 ">
        <Button onClick={() => handleIncrement()}>increment</Button>
        <Button onClick={() => handleDecrement()}>decrement</Button>
        <Button onClick={() => handleIncrementByAmout()}>
          incrementByAmount
        </Button>
      </div>
    </>
  );
}
