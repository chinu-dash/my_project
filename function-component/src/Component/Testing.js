import React from "react";

function Testing() {
    const name = ["A", "B", "C"]
    return (
        <div>
            {name.map(name => <h2>{name}</h2>)}
        </div>
    )
}

export default Testing
