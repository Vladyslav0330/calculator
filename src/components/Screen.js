import { useContext } from "react";
import { CalcContext } from "./context/CalcContext";
// import { Textfit } from "react";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen" max={70} mode="single">
      <span className="number">{calc.num ? calc.num : calc.res}</span>
    </div>
  );
};

export default Screen;
