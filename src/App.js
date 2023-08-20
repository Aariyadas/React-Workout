import React from "react";
import "./App.css";
import ContextComponentC from "./components/ContextComponentC";
import Counter from "./components/Counter";
import CounterPrev from "./components/CounterPrev";
import FectchData from "./components/FectchData";
import FetchPost2 from "./components/FetchPost2";
import FetchPost3 from "./components/FetchPost3";
import UseEffcect4 from "./components/UseEffcect4";
import UseEffect1 from "./components/UseEffect1";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import UseStateArr from "./components/UseStateArr";
import UseStateObject from "./components/UseStateObject";
import ParentCallHook from "./components/ParentCallHook";
import Interview1 from "./components/Interview1";
import Interview2 from "./components/Interview2";
import Interview3 from "./components/Interview3";
import Interview4 from "./components/Interview4";
import UseState from "./pages/UseState/UseState";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <CounterPrev/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateArr/> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <UseEffect3/> */}
      {/* <UseEffcect4/> */}
      {/* <FectchData/> */}
      {/* <FetchPost2/> */}
      {/* <FetchPost3/> */}
      {/* <UserContext.Provider value={"Ariya"}>
        <ChannelContext.Provider value={"React Tutorial"}>
          <ContextComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <ParentCallHook/> */}
      {/* <Interview1/> */}
{/* <Interview2/> */}
{/* <Interview3/> */}
{/* <Interview4/> */}


    </div>
  );
}

export default App;
