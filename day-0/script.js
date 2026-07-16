// // console.log(React)

// let rh1 = React.createElement("h1", {}, React.createElement('span', {}, "i am under"));
// console.log(rh1)


// console.log(ReactDOM)

import React from "react";
import {a} from "./main.js";
import {sum} from "./main.js"
// console.log(a);
console.log(sum(5,6))
let domElement = document.querySelector("#root");
let div = React.createElement('div', {}, "i am Div");

ReactDOM.createRoot(domElement).render(div);