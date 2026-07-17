
import React from "react";

console.log(React);
let root = document.querySelector("#root");

const h1 = React.createElement("h1", {}, "This is From react")

ReactDOM.createRoot(root).render(h1);