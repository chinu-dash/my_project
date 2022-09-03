import React, { useState } from "react";
import Header from "./Header";


function Todo() {
    const [todoList, settodoList] = useState()
    const todo = (event) => {
        settodoList(event.target.value)
        console.log(todoList);

    }
    return (


        <>
            <div className="main_div">

                <Header />
                <div style={{ float: "left" }}><button class="btn btn-success" ><a href="/"  >❮ Previous</a></button></div>
                <div style={{ float: "right" }}><button class="btn btn-success" ><a href="/printName"  > Next ❯ </a></button></div>
                <div className="center_div">
                    <h2>TODO LIST</h2><br />
                    <input class="col-sm-10" id="todolist" type="text" placeholder="Add a Items" onChange={todo} />
                    <button className="todoButton">+</button>
                    <ol>
                        <li>{todoList}</li>
                    </ol>
                </div>
            </div>
        </>
    )

}
export default Todo;