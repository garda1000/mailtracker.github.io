// Ambil data dari sessionStorage
const keterangan = sessionStorage.getItem("keterangan");
const lastUpdate = sessionStorage.getItem("LastUpdate");
const tanggal = sessionStorage.getItem("tanggal");

// Masukkan keterangan ke elemen "output"
if (keterangan) {
    document.getElementById("output").innerText = keterangan;
}

if (tanggal) {
    document.getElementById("datedetik").innerText = tanggal;
    document.getElementById("tgldetik").innerText = tanggal;
}

// Masukkan tanggal ke elemen yang sesuai
if (lastUpdate) {
    document.getElementById("date").innerText = lastUpdate;
    document.getElementById("tgl").innerText = lastUpdate;
}

// Tampilkan langkah tambahan jika keterangan tersedia
if (keterangan && keterangan.length > 2) {
    document.getElementById("terkirimStep").classList.remove("hidden");
    document.getElementById("selesaiStep").classList.remove("hidden");
}
