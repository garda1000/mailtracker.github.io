$(document).ready(function () {
    $("#example").DataTable({
      ajax: "https://script.google.com/macros/s/AKfycbwhnYqEH-nSJZhGdIIl_mXDJeRRXpYgzUizfcNRusUkHwJY3Y8UtdAqMJ2ZxtWxVjzRYg/exec",
      columns: [
        { title: "NOMOR", data: "NOMOR" },
        { title: "ALAMAT PENGIRIM", data: "ALAMAT PENGIRIM" },
        { title: "NOMOR SURAT", data: "NOMOR SURAT" },
        { title: "TANGGAL", data: "TANGGAL" },
        { title: "PERIHAL", data: "PERIHAL" },
        { title: "KETERANGAN", data: "KETERANGAN" },
        {
          title: "AKSI",
          data: null,
          render: function (data, type, row) {
            return '<button class="btn btn-primary btn-sm" onclick="lihatDetail(\'' + row["KETERANGAN"] + '\')">Lihat</button>';
          },
          orderable: false,
          searchable: false
        }
      ],
      rowId: "ID",
      liveAjax: true,
    });
  });

  function lihatDetail(keterangan) {
    // Simpan keterangan di session storage
    sessionStorage.setItem("keterangan", keterangan);
    
    // Set src untuk iframe tanpa parameter
    document.getElementById("modalIframe").src = "FlowSurat.html";
    console.log(keterangan)
    // Tampilkan modal
    $("#suratModal").modal("show");
}

