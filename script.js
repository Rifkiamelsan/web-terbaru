// Fungsi untuk menampilkan atau menyembunyikan menu hamburger
function toggleMenu() {
    const menu = document.getElementById('menu');  // Mendapatkan elemen menu berdasarkan ID
    
    // Toggle kelas 'active' pada menu
    // Jika menu sudah aktif, kelas ini akan menghilangkan menu, jika tidak, menu akan ditampilkan
    menu.classList.toggle('active');
    
    // Menutup menu jika area luar menu diklik (untuk menambah interaktivitas)
    document.addEventListener('click', function(event) {
        // Memastikan area luar menu atau ikon menu yang diklik
        if (!menu.contains(event.target) && !event.target.matches('.menu-icon')) {
            menu.classList.remove('active');  // Menutup menu jika klik di luar menu
        }
    });
}

// Fungsi untuk menampilkan halaman yang dipilih
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');  // Mendapatkan semua elemen dengan class 'page'
    
    // Menyembunyikan semua halaman
    pages.forEach(page => {
        page.style.display = 'none';  // Menyembunyikan setiap halaman
    });
    
    // Menampilkan halaman yang dipilih berdasarkan pageId
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';  // Menampilkan halaman yang sesuai
    }
    
    // Menutup menu setelah memilih halaman
    const menu = document.getElementById('menu');
    menu.classList.remove('active');  // Menutup menu setelah halaman dipilih
}

// Fungsi untuk mengatur tampilan lightbox (pembesar gambar)
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');  // Mendapatkan elemen lightbox
    const lightboxImg = document.getElementById('lightbox-img');  // Mendapatkan elemen gambar dalam lightbox
    
    // Mengambil semua gambar proyek
    const images = document.querySelectorAll('.project-image');
    
    // Menampilkan gambar yang sesuai dengan indeks
    lightboxImg.src = images[index].src;  // Menampilkan gambar berdasarkan indeks
    
    // Menampilkan lightbox
    lightbox.style.display = 'block';  // Mengubah tampilan lightbox menjadi terlihat
}

// Fungsi untuk menutup lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');  // Mendapatkan elemen lightbox
    
    // Menyembunyikan lightbox
    lightbox.style.display = 'none';  // Mengubah tampilan lightbox menjadi tersembunyi
}

// Fungsi untuk menavigasi gambar lightbox (sebelumnya/berikutnya)
function navigateLightbox(direction) {
    const lightboxImg = document.getElementById('lightbox-img');  // Mendapatkan gambar di dalam lightbox
    
    // Mengambil semua gambar proyek
    const images = document.querySelectorAll('.project-image');
    
    // Menemukan indeks gambar saat ini di dalam lightbox
    let currentIndex = Array.from(images).findIndex(img => img.src === lightboxImg.src);
    
    // Menghitung indeks gambar berikutnya atau sebelumnya berdasarkan arah
    let newIndex = currentIndex + direction;
    
    // Jika indeks baru melebihi jumlah gambar, kembali ke gambar pertama atau terakhir
    if (newIndex < 0) newIndex = images.length - 1;  // Jika ke indeks negatif, kembali ke gambar terakhir
    if (newIndex >= images.length) newIndex = 0;  // Jika melebihi indeks gambar, kembali ke gambar pertama
    
    // Mengubah sumber gambar lightbox ke gambar yang dipilih
    lightboxImg.src = images[newIndex].src;
}

// Event listener untuk menavigasi menggunakan swipe (untuk interaksi swipe di lightbox)
const lightbox = document.getElementById('lightbox');  // Mendapatkan elemen lightbox
const hammer = new Hammer(lightbox);  // Menggunakan Hammer.js untuk mendeteksi gesture swipe

// Menambahkan gesture swipe untuk navigasi lightbox
hammer.on('swipeleft', function() {
    navigateLightbox(1);  // Swipe kiri untuk gambar berikutnya
});
hammer.on('swiperight', function() {
    navigateLightbox(-1);  // Swipe kanan untuk gambar sebelumnya
});
