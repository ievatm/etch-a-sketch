const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = "";

    const itemSize = 100 / size;

    for (let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add ("flex-item");

        div.style.width = `${itemSize}%`;
        div.style.height = `${itemSize}%`;

        container.appendChild(div);
        
        div.addEventListener("mouseover", () => {
            div.classList.add("hovered");  
        })
    }
}

createGrid(16);

document.querySelector(".new-grid-btn").addEventListener("click", () => {
    const newSize = prompt ("Enter a new grid size");
    if (newSize && newSize > 0) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number");
    }
});


