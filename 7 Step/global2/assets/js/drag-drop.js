document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll(".draggable");
    const renewableZone = document.getElementById("renewable");
    const nonRenewableZone = document.getElementById("nonRenewable");
    const feedback = document.getElementById("feedback");

    // Dados sobre as fontes de energia
    const renewableSources = ["solar", "wind", "hydro", "biomass"];
    const nonRenewableSources = ["coal", "oil", "gas", "nuc"];

    // Funções de arrastar e soltar
    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", () => {
            draggable.classList.add("dragging");
        });

        draggable.addEventListener("dragend", () => {
            draggable.classList.remove("dragging");
        });
    });

    [renewableZone, nonRenewableZone].forEach(zone => {
        zone.addEventListener("dragover", e => {
            e.preventDefault();
        });

        zone.addEventListener("drop", e => {
            e.preventDefault();
            const draggedElement = document.querySelector(".dragging");
            const sourceId = draggedElement.id;

            // Verifica se a fonte de energia está na zona correta
            if (
                (zone.id === "renewable" && renewableSources.includes(sourceId)) ||
                (zone.id === "nonRenewable" && nonRenewableSources.includes(sourceId))
            ) {
                zone.appendChild(draggedElement);
                feedback.textContent = "Correto! Continue assim.";
                feedback.style.color = "dark";
            } else {
                feedback.textContent = "Oops! Tente novamente.";
                feedback.style.color = "red";
            }
        });
    });
});
