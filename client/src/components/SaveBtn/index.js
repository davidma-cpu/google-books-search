import React from "react";
import "./style.css";

function SaveBtn(props) {
    return (
        <button className="save-btn" {...props}>
            Save
        </button>
    );
}

export default SaveBtn;