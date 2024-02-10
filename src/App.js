import './App.css';
import {useState} from 'react';

function App() {
  const [exp, setExp] = useState("");
  const [cal, setCal] = useState(false);

  const handleExp = (char) => {
    setExp((prevExp) => prevExp + char);
  }

  const handleClear = () => {
    setExp("");
    setCal(false);
  }

  const getAns = () => {
    try{
      return eval(exp);
    }
    catch(err){
      return "Error";
    }
  }

  const buttonStyle = {
    height : "50px",
    width : "50px",
    backgroundColor : "#ccc",
    border : "1px solid black",
    borderRadius : "10px",
    margin : "10px",
  }

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={exp} onChange={(e) => setExp(e.target.value)} />
      <br />
      {cal?(<div>{exp?getAns():"Error"}</div>):null}
      <button style={buttonStyle} onClick={() => handleExp("7")} >7</button>
      <button style={buttonStyle} onClick={() => handleExp("8")} >8</button>
      <button style={buttonStyle} onClick={() => handleExp("9")} >9</button>
      <button style={buttonStyle} onClick={() => handleExp("+")} >+</button>
      <br />
      <button style={buttonStyle} onClick={() => handleExp("4")} >4</button>
      <button style={buttonStyle} onClick={() => handleExp("5")} >5</button>
      <button style={buttonStyle} onClick={() => handleExp("6")} >6</button>
      <button style={buttonStyle} onClick={() => handleExp("-")} >-</button>
      <br />
      <button style={buttonStyle} onClick={() => handleExp("1")} >1</button>
      <button style={buttonStyle} onClick={() => handleExp("2")} >2</button>
      <button style={buttonStyle} onClick={() => handleExp("3")} >3</button>
      <button style={buttonStyle} onClick={() => handleExp("*")} >*</button>
      <br />
      <button style={buttonStyle} onClick={() => handleClear()} >C</button>
      <button style={buttonStyle} onClick={() => handleExp("0")} >0</button>
      <button style={buttonStyle} onClick={() => setCal(true)} >=</button>
      <button style={buttonStyle} onClick={() => handleExp("/")} >/</button>
      <br />
    </div>
  );
}

export default App;
