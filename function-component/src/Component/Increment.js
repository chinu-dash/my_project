import React, { useState } from "react";
import Header from "./Header";


function Increment() {
  const [age, showAge] = useState()

  const number = (event) => {
    showAge(event.target.value)
    console.log(age)
  }
  const ageIncrementHandle = () => {
    showAge(Number(age) + 1)
  }

  const ageDelineHandle = () => {
    showAge(Number(age) - 1)
  }

  return (
    <>
      <Header />
      <div className="container">
        <div style={{ float: "left" }}><button class="btn btn-success" ><a href="/"  >❮ Previous</a></button></div>
        <div style={{ float: "right" }}><button class="btn btn-success" ><a href="/printName"  > Next ❯ </a></button></div>
        <h1>INCREMENT / DECREMENT</h1><hr />

        {<h1>Number : {age ? age : "0"}</h1>}

        <div className="inter-container">
          <div class="form-group row">
            <label class="col-sm-2 col-form-label">Enter a Number : </label>
            <div class="col-sm-5">
              <input type="number" class="form-control" placeholder="Enter a Number" name="lname" onChange={number} />
            </div>
          </div>

          <button class="btn btn-primary" onClick={ageIncrementHandle}>Number Increment</button>
          <button class="btn btn-primary" id="deline" onClick={ageDelineHandle}>Number Deline</button>

        </div>
      </div>
    </>
  );
}

export default Increment;
