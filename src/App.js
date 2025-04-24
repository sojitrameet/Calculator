// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { useState } from 'react';

function App() {

  let [number, setNumber] = useState("")
  let [output, setOutput] = useState("")
  let [operator, setOprator] = useState("")
  let [split, setSplit] = useState("")
  const num = (value) => {
    setNumber(number + value);

  };

  const opr = (operator) => {
    // setNumber((prev) => prev + oprator);
    const newValue = number + operator;
    setNumber(newValue);
    console.log("opeator" + operator);
    setOprator(operator)

  }

  let resultt;
  const res = () => {
    let operator = number.match(/[\+\-\*\/]/)[0]; 
    let parts = number.split(operator);

    let arr = number.split(operator)

    console.log("operator :" + operator);
    let num1 = parseInt(arr[0]);
    let num2 = parseInt(arr[1]);
    // resultt = num1 + num2;

    if (operator === "+") {
      resultt = num1 + num2;
    }
    else if (operator=="-") {
      resultt = num1 - num2;

    }
    else if (operator=="/") {
      resultt = num1 / num2;

    } else if (operator=="*") {
      resultt = num1 * num2;

    }

    // setNumber(resultt)
    console.log("res" + resultt)

    console.log("NUm " + num1)
    console.log("NUm2 " + num2)
    // alert("fdjh");

  }






  return (
    <>

      <div className='container'>
        <div className='sen'>

          <input type='text' value={number} id='dis' /> <br />
          <input type='button' value="1" onClick={() => num("1")} />
          <input type='button' value="2" onClick={() => num("2")} />
          <input type='button' value="3" onClick={() => num("3")} />
          <input type='button' value="4" onClick={() => num("4")} />
          <input type='button' value="5" onClick={() => num("5")} />

          <br></br>

          <input type='button' value="6" onClick={() => num("6")} />
          <input type='button' value="7" onClick={() => num("7")} />
          <input type='button' value="8" onClick={() => num("8")} />
          <input type='button' value="9" onClick={() => num("9")} />
          <input type='button' value="0" onClick={() => num("0")} />

          <br></br>

          <input type='button' value="+" onClick={() => num("+")} />
          <input type='button' value="- " onClick={() => num("-")} />
          <input type='button' value="*" onClick={() => num("*")} />
          <input type='button' value="/ " onClick={() => num("/")} />

          <input type='button' value="=" onClick={res} /> <br></br>
        </div>
      </div>


    </>
  );
}

export default App;
