document.addEventListener("DOMContentLoaded", () => {

    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.getElementById("sapa-btn").addEventListener("click", () => {
        alert("Halo! Terima kasih sudah berkunjung 😊");
    });

});
