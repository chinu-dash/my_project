import React, { useState } from "react";
import Header from "./Header";


function PrintName() {
    const [name, setName] = useState("");
    const [print, setPrint] = useState("")


    const inputEvent = (event) => {
        setName(event.target.value)
        console.log(event.target.value)
    }

    const fullNameSet = () => {
        setPrint(name)
    }


    return (
        <>
            <Header />

            <div className="container">
                <div style={{ float: "left" }}><button class="btn btn-success" ><a href="/increment"  >❮ Previous</a></button></div>
                <div style={{ float: "right" }}><button class="btn btn-success" ><a href="/todo"  > Next ❯ </a></button></div>
                <h1>Print Name</h1><hr />

                <div className="inter-container">

                    <h1>Hello {print}</h1>
                    <div className="containerPrintName">
                        <div class="form-group row">
                            <input class="col-sm-10" type="text" placeholder="Enter Your Name" onChange={inputEvent} />
                        </div>
                        <br />
                        <button class="btn btn-primary" id="clickMe" onClick={fullNameSet}>Click Me</button>
                    </div>


                </div>
            </div>
        </>
    )
}
export default PrintName