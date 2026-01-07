// Menjalankan kode setelah seluruh dokumen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {

    // Mengambil elemen tombol hamburger berdasarkan id
    const hamburger = document.getElementById("hamburger-menu");

    // Mengambil elemen daftar navigasi (menu)
    const navLinks = document.getElementById("nav-links");

    // Event ketika tombol hamburger diklik
    hamburger.addEventListener("click", () => {

        // Menambahkan atau menghapus class "active"
        // Class ini biasanya digunakan di CSS untuk menampilkan / menyembunyikan menu
        navLinks.classList.toggle("active");
    });

    // Event ketika tombol "Sapa Saya!" diklik
    document.getElementById("sapa-btn").addEventListener("click", () => {

        // Menampilkan popup alert ke pengguna
        alert("Halo! Terima kasih sudah berkunjung 😊");
    });

});
