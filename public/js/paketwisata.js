function beliPaket(paket, harga) {
    const jumlahPeserta = $('#jumlah').val();
    const hargaTransportasi = $('#hargaTransportasi').val();
    const hargaMakanan = $('#hargaMakanan').val();
    const hargaPenginapan = $('#hargaPenginapan').val();
    localStorage.setItem('paket', paket);
    localStorage.setItem('harga', harga);
    localStorage.setItem('jumlahPeserta', jumlahPeserta);
    localStorage.setItem('hargaTransportasi', hargaTransportasi);
    localStorage.setItem('hargaMakanan', hargaMakanan);
    localStorage.setItem('hargaPenginapan', hargaPenginapan);
    window.location.href = '../src/Checkout.html';

    $('#namaPaket').val(paket);
}