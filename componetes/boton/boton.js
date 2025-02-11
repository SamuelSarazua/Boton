function cargarBoton() {
    let div = document.createElement(`div`);
    div.className = "div_prin";

    let div2 = document.createElement(`div`);
    div2.className = "div_secon";
    div.appendChild(div2);

    let div3 = document.createElement(`div`);
    div3.className = "div_btn";
    
    let h2 = document.createElement(`h2`);
    h2.textContent = "Botón";
    div3.appendChild(h2);

    div.appendChild(div3)

    return div;
}

export { cargarBoton }