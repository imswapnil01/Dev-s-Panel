document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");

    btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
});
