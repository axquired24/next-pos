function formatRupiah(angka, prefix='Rp'){
  const angkaString = angka.toString()
	let numberString = angkaString.replace(/[^,\d]/g, '').toString(),
	split   		= numberString.split(','),
	sisa     		= split[0].length % 3,
	rupiah     		= split[0].substr(0, sisa),
	ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

	// tambahkan titik jika yang di input sudah menjadi angka ribuan
	if(ribuan){
		separator = sisa ? '.' : '';
		rupiah += separator + ribuan.join('.');
	}

	rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
	return prefix + rupiah;
}

const Helper = {
  formatRupiah
}

export default Helper
