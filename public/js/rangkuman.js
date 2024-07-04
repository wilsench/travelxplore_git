$(document).ready(function() {
    const namaLengkap = localStorage.getItem('namaLengkap');
    const email = localStorage.getItem('email');
    const telepon = localStorage.getItem('telepon');
    const provinsi = localStorage.getItem('provinsi');
    const kabupaten = localStorage.getItem('kabupaten');
    const alamatLengkap = localStorage.getItem('alamatLengkap');
    const namaPaket = localStorage.getItem('namaPaket');
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
    $('#namaPaket').text(namaPaket);
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

// Fungsi untuk menghasilkan kode acak
function generateKodePembayaran(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

// Mendapatkan elemen HTML tempat kode akan ditampilkan
const kodePembayaranElement = document.getElementById('kodePembayaran');

// Menghasilkan kode acak dengan panjang 10 karakter
const kodePembayaran = generateKodePembayaran(10);

// Menampilkan kode acak di elemen HTML
kodePembayaranElement.textContent = kodePembayaran;
