import { cargarBoton } from "./componetes/boton/boton.js";

let DOM = document.querySelector("#root");

DOM.appendChild(cargarBoton());

let boton = document.querySelector(".div_btn");

boton.addEventListener("click", () => {
    let div2 = document.querySelector(".div_secon");
    div2.classList.add("color");
});
