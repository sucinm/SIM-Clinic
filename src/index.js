import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom"; // untuk pemindahan halaman

ReactDOM.render(
  // tambahan <BrowserRouter>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// dibawah ini sebelumnya
// ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
