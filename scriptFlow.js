const keterangan = sessionStorage.getItem("keterangan");
if (keterangan) {
    document.getElementById("output").innerHTML = keterangan;
} 

const tanggal = sessionStorage.getItem("tanggal");
if (tanggal) {
    document.getElementById("date").innerHTML = tanggal;
    document.getElementById("tgl").innerHTML = tanggal;
}


if (keterangan && keterangan.length > 2) {
    document.getElementById("terkirimStep").classList.remove("hidden");
    document.getElementById("selesaiStep").classList.remove("hidden");
}
