// Menunggu dokumen HTML selesai dimuat sepenuhnya
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MANIPULASI DOM UNTUK NAVIGASI (HAMBURGER MENU)
    // Mengambil elemen menggunakan querySelector
    const hamburger = document.querySelector('#hamburger-menu');
    const navMenu = document.querySelector('#nav-links');

    // Menambahkan event listener untuk klik
    hamburger.addEventListener('click', () => {
        // Toggle class 'active' untuk animasi hamburger dan memunculkan menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Menutup menu jika salah satu link diklik
    document.querySelectorAll('#nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 2. INTERAKTIVITAS SEDERHANA (TOMBOL SAPA)
    const sapaBtn = document.querySelector('#sapa-btn');
    
    sapaBtn.addEventListener('click', () => {
        // Menggunakan alert browser
        alert("Halo! Terima kasih sudah mengunjungi portofolio saya. Semoga harimu menyenangkan!");
        
        // Mengubah teks tombol setelah diklik (Manipulasi DOM)
        sapaBtn.textContent = "Terima Kasih!";
        sapaBtn.style.backgroundColor = "#fff";
        sapaBtn.style.color = "#006837";
    });

    // 3. ANIMASI SCROLL (FADE IN / FADE OUT)
    
    // Fungsi untuk memproses elemen saat masuk/keluar layar
    const scrollCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Jika elemen MASUK ke layar, tambahkan class 'active' (Fade In)
                entry.target.classList.add('active');
            } else {
                // Jika elemen KELUAR dari layar, hapus class 'active' (Fade Out)
                // Hapus bagian 'else' ini jika Anda ingin animasi hanya terjadi sekali seumur hidup
                entry.target.classList.remove('active');
            }
        });
    };

    // Opsi konfigurasi observer
    const scrollOptions = {
        root: null,      // viewport browser
        threshold: 0.15, // Animasi berjalan ketika 15% elemen terlihat
        rootMargin: "0px"
    };

    // Membuat Observer baru
    const scrollObserver = new IntersectionObserver(scrollCallback, scrollOptions);

    // Menargetkan semua elemen yang memiliki class '.reveal'
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => scrollObserver.observe(el));


});
