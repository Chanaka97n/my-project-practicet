import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [calState, setCalState] = useState(0);
  const [firstLoadingOfComp, setFirstLoadingOfComp] = useState("inital");
  const [whenCompRendering, setWhenCompRendering] = useState(100);
  const [dependedntRendering, setDependedntRendering] = useState(1000);
  const [dependedntRenderingView, setDependedntRenderingView] = useState(1000);

  const handleClickDecrement = () => {
    setCalState(calState - 1);
  };

  const handleClickIncrement = () => {
    setCalState(calState + 1);
  };

  useEffect(() => {
    setFirstLoadingOfComp("initial load done");
  }, []);

  // useEffect(() => {
  //   setWhenCompRendering(whenCompRendering + 100);
  // });

  useEffect(() => {
    setDependedntRenderingView(dependedntRenderingView - 1000);
  }, [dependedntRendering]);

  return (
    <div className="flex items-center  justify-center w-screen h-screen">
      <div className="space-y-6">
        <div className="flex justify-start space-x-2">
          <button
            className="p-2 text-red-950 font-bold bg-red-400 rounded-md shadow"
            onClick={(e) => handleClickDecrement(e)}
          >
            -
          </button>
          <div className="p-2 text-red-950 font-bold bg-red-400 rounded-md shadow">
            {calState}
          </div>

          <button
            className="p-2 text-red-950 font-bold bg-red-400 rounded-md shadow"
            onClick={handleClickIncrement}
          >
            +
          </button>
        </div>
        <div className="">firstLoadingOfComp ={firstLoadingOfComp}</div>
        <div className="">whenCompRendering ={whenCompRendering}</div>
        <div className="flex space-x-2">
          <div className="p-2 text-red-950 font-bold bg-lime-400 rounded-md shadow">
            dependedntRendering= {dependedntRendering}
          </div>

          <div className="p-2 text-red-950 font-bold bg-lime-400 rounded-md shadow">
            dependedntRenderingView = {dependedntRenderingView}
          </div>

          <button
            className="p-2 text-red-950 font-bold bg-lime-400 rounded-md shadow"
            onClick={() => setDependedntRendering(dependedntRendering + 1000)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
