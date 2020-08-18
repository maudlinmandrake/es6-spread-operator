import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// // ES6 Spread operator!
// const citrus = ["Lime", "Lemon", "Orange"];
//                                              // Spread!
// const fruit = ["Apple", "Banana", "Coconut", ...citrus];

// console.log(fruit);

// // Spread operator can also be used with objects.
// const fullName = {
//   fName: "Jenny",
//   lName: "Mikac"
// }

// const user = {
//   ...fullName,
//   id: 1,
//   usrname: "jennyrox1986"
// }

// console.log(user);
