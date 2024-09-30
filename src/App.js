import logo from "./logo.svg";
import "./App.css";
import { A } from "./A";
import { B } from "./B";
import { useState } from "react";
import { C } from "./C";
import { Users } from "./user";

function App() {
  // const [value, setvalue] = useState(0);
  // const [text, settext] = useState("");
  const [datas, setdatas] = useState([]);
  // const getData = (valueA, textA) => {
  //   setvalue(valueA);
  //   settext(textA);
  // };
  const getdata1 = (datas1) => {
    setdatas(datas1);
  };

  return (
    <div className="App">
      {/* <A call2={getData} />
      <B val={value} text={text} /> */}
      <Users call1={getdata1} />
      <C datas={datas} />
    </div>
  );
}

export default App;
