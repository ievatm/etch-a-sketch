const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = "";

    const itemSize = 100 / size;

    for (let i = 0; i < size * size; i++){
        const div = document.createElement("div");
        div.classList.add ("flex-item");

        div.style.width = `${itemSize}%`;
        div.style.height = `${itemSize}%`;

        div.style.opacity = "1";

        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(div.style.opacity);
            if (currentOpacity > 0) {
                div.style.opacity = (currentOpacity - 0.1).toFixed(1);
            }
        });
    }
}

createGrid(16);

document.querySelector(".new-grid-btn").addEventListener("click", () => {
    const newSize = prompt ("Enter a new grid size, max 100");
    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else if (newSize > 100) {
        alert("please enter a valid number up to 100 max");
    } else {
        alert("Please enter a valid number");
    }
});


