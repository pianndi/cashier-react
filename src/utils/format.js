export function formatNumber(number) {
  const formatted = new Intl.NumberFormat().format(number);
  return formatted.replace(/,/g, ".");
}

export function formatDate(date = null) {
  const d = (date && new Date(date)) || new Date(Date.now());
  const tanggal = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
  const waktu = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return `${tanggal} ${waktu}`;
}

// export function noTransaksi(status = false) {
//   const date = new Date(Date.now());
//   const kode = "01";
//   const stts = (status && 1) || 0;
//   const cabang = "069";
//   const year = date.getYear();
//   const seri = Date.now();
//   return `${kode}${stts}.${cabang}-${year}.${seri}`;
// }
//
