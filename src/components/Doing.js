import React , { useState } from "react";

const Doing = (props) => {
    return (
        <div>
            <h2>Doing</h2>
            {
                props.item.map((data, index) => <p key={index}>{data.item}</p>)
            }
        </div>
    )
}

export default Doing;