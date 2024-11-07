const keterangan = sessionStorage.getItem("keterangan");
document.getElementById("output").innerHTML = keterangan;

if (keterangan.length > 3) {
    document.getElementById("terkirimStep").classList.remove("hidden");
    document.getElementById("selesaiStep").classList.remove("hidden");
}