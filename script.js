const container = document.querySelector(".flex-container");

function createGrid(size) {
    container.innerHTML = " ";

    for (let i = 0; i <size * size; i++){
        const div = document.createElement("div");
        div.classList.add ("flex-item");
        container.appendChild(div);
    }
}

createGrid(16);

document.querySelector(".new-grid-btn").addEventListener("click", () => {
    const newSize = prompt ("Enter a new grid size");
    if (newSize && newSize > 0) {
        createGrid(newSize);
    }
});


