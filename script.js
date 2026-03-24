let count = 0;

const btn = document.getElementById("actionBtn");
const status = document.getElementById("status");

// attach event (instead of onclick in HTML)
btn.addEventListener("click", performAction);

function performAction() {
    count++;

    btn.classList.add("click-feedback");
    setTimeout(() => btn.classList.remove("click-feedback"), 200);


  status.textContent = `✅ Processed ${count} time${count !== 1 ? 's' : ''}`;

    if (count >= 3) {
        btn.disabled = true;
        btn.classList.add("constrained", "disabled-signifier");
        status.textContent = "⛔ Limit reached (3 clicks max)";
    }
}