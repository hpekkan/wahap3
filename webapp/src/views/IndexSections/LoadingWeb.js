import React from "react";

export default function Loading(props) {
    return (<div>
        {props.Loading && (<div>
            <h1>Loading</h1>
        </div>)}</div>
    );
}