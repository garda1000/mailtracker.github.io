const urlParams = new URLSearchParams(window.location.search);
const keterangan = urlParams.get('keterangan');
document.getElementById("output").innerHTML = keterangan;

// Menampilkan step "Terkirim" dan "Selesai" jika "KETERANGAN" lebih dari 3 karakter
if (keterangan.length > 5) {
    document.getElementById("terkirimStep").classList.remove("hidden");
    document.getElementById("selesaiStep").classList.remove("hidden");
}