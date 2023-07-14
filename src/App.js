import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  const [state, setState] = React.useState([]);
  
  const add__ = React.useCallback(()=>{
    const value__ = document.getElementById("input_id").value
    setState([...state , value__])
  },[state])

  const remeve_it = React.useCallback((id)=>{
    const filter_arr = state.filter((i , index , arr)=> index !== id  )
    setState(filter_arr)
  },[state])
  
  return (
    <React.Fragment>
      <div style={{ width: "120px" }}>
        <div className="" style={{ display: " " }}>
          <input type="text" id="input_id" />
          <button onClick={()=>add__()}>ADD</button>
        </div>
        <div className="map">
          {state?.length === 0
            ? " "
            : state?.map((i, index, arr) => {
                return (
                  <React.Fragment>
                  <div
                    className="task__"
                    style={{
                      lineHeight:"40px",
                      width: "100%",
                      padding: "4px 10px",
                      backgroundColor: "yellow",
                    }}
                  >
                    {i}
                  </div>
                  <button onClick={()=>remeve_it(index)}>x</button>
                  </React.Fragment>
                )
              })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
