import logo from "./logo.svg";
import "./App.css";
import { A } from "./A";
import { B } from "./B";
import { useState } from "react";
import { C } from "./C";
import { Users } from "./user";
import Debounce from "./Debounce";

function App() {
  // *****lifting state from A to B*****
  // const [value, setvalue] = useState(0);
  // const [text, settext] = useState("");

  // const getData = (valueA, textA) => {
  //   setvalue(valueA);
  //   settext(textA);
  // };
  // const [datas, setdatas] = useState([]);
  // const getdata1 = (datas1) => {
  //   setdatas(datas1);
  // };

  return (
    <div className="App">
      {/* *****lifting state from A to B***** */}

      {/* <A call2={getData} />
      <B val={value} text={text} /> */}

      {/* *****lifting state from users to C***** */}

      {/* <Users call1={getdata1} />
      <C datas={datas} /> */}
      {/* *******Debounce******* */}
      <Debounce />
    </div>
  );
}

export default App;
