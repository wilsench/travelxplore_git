$(document).ready(function() {
    const paket = localStorage.getItem('paket');
    const harga = parseFloat(localStorage.getItem('harga'));
    const jumlahPeserta = parseInt(localStorage.getItem('jumlahPeserta'));
    const hargaTransportasi = parseFloat(localStorage.getItem('hargaTransportasi'));
    const hargaMakanan = parseFloat(localStorage.getItem('hargaMakanan'));
    const hargaPenginapan = parseFloat(localStorage.getItem('hargaPenginapan'));

    const totalHarga = jumlahPeserta * (hargaTransportasi + hargaMakanan + hargaPenginapan);

    $('#namaPaket').val(paket); // Menampilkan nama paket
    $('#jumlahPeserta').val(jumlahPeserta);
    $('#hargaPaket').val(harga);
    $('#hargaTransportasi').val(hargaTransportasi);
    $('#hargaMakanan').val(hargaMakanan);
    $('#hargaPenginapan').val(hargaPenginapan);
    $('#totalHarga').val(totalHarga);
});

function placeOrder() {
    const namaLengkap = $('#namaLengkap').val();
    const email = $('#email').val();
    const telepon = $('#telepon').val();
    const provinsi = $('#provinsi').val();
    const kabupaten = $('#kabupaten').val();
    const alamatLengkap = $('#alamatLengkap').val();
    const jumlahPeserta = $('#jumlahPeserta').val();
    const hargaPaket = $('#hargaPaket').val();
    const hargaTransportasi = $('#hargaTransportasi').val();
    const hargaMakanan = $('#hargaMakanan').val();
    const hargaPenginapan = $('#hargaPenginapan').val();
    const totalHarga = $('#totalHarga').val();
    const namaPaket = $('#namaPaket').val();

    localStorage.setItem('namaLengkap', namaLengkap);
    localStorage.setItem('email', email);
    localStorage.setItem('telepon', telepon);
    localStorage.setItem('provinsi', provinsi);
    localStorage.setItem('kabupaten', kabupaten);
    localStorage.setItem('alamatLengkap', alamatLengkap);
    localStorage.setItem('jumlahPeserta', jumlahPeserta);
    localStorage.setItem('namaPaket', namaPaket);
    localStorage.setItem('hargaPaket', hargaPaket);
    localStorage.setItem('hargaTransportasi', hargaTransportasi);
    localStorage.setItem('hargaMakanan', hargaMakanan);
    localStorage.setItem('hargaPenginapan', hargaPenginapan);
    localStorage.setItem('totalHarga', totalHarga);

    window.location.href = '../src/Rangkuman.html';
}