$(document).ready(function() {
    const namaLengkap = localStorage.getItem('namaLengkap');
    const email = localStorage.getItem('email');
    const telepon = localStorage.getItem('telepon');
    const provinsi = localStorage.getItem('provinsi');
    const kabupaten = localStorage.getItem('kabupaten');
    const alamatLengkap = localStorage.getItem('alamatLengkap');
    const jumlahPeserta = localStorage.getItem('jumlahPeserta');
    const hargaPaket = parseFloat(localStorage.getItem('harga'));
    const hargaTransportasi = parseFloat(localStorage.getItem('hargaTransportasi'));
    const hargaMakanan = parseFloat(localStorage.getItem('hargaMakanan'));
    const hargaPenginapan = parseFloat(localStorage.getItem('hargaPenginapan'));
    const totalHarga = parseFloat(localStorage.getItem('totalHarga'));

    $('#namaLengkap').text(namaLengkap);
    $('#email').text(email);
    $('#telepon').text(telepon);
    $('#provinsi').text(provinsi);
    $('#kabupaten').text(kabupaten);
    $('#alamatLengkap').text(alamatLengkap);
    $('#jumlahPeserta').text(jumlahPeserta);
    $('#hargaPaket').text(formatRupiah(hargaPaket));
    $('#hargaTransportasi').text(formatRupiah(hargaTransportasi));
    $('#hargaMakanan').text(formatRupiah(hargaMakanan));
    $('#hargaPenginapan').text(formatRupiah(hargaPenginapan));
    $('#totalHarga').text(formatRupiah(totalHarga));
});

function formatRupiah(angka) {
    if (typeof angka !== 'number') {
        return "Rp 0";
    }
    return "Rp " + angka.toLocaleString('id-ID');
}
