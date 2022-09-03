import React, { useState } from "react";
import Header from "./Header";

function Toggle() {
    const [show, showToggle] = useState(true)


    return (
        <>
            <Header />
            <div className="container">
                <div style={{ float: "right" }}><button class="btn btn-success" ><a href="/increment"  > Next ❯</a></button></div>

                <h1>TOGGLE</h1><hr></hr>

                <div className="inter-container">
                    {show ? <h1>Hello world</h1> : null}
                    <br />
                    <button class="btn btn-primary" onClick={() => showToggle(true)}>Show</button>
                    <button class="btn btn-primary" id="clickMe" onClick={() => showToggle(false)}>Hide</button>
                </div>
            </div>
        </>
    )
}
export default Toggle