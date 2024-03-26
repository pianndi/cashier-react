import { useState } from "react";
import {
  formatNumber as format,
  formatDate,
  
} from "../../utils/format.js";

export default function Receipt({ tgl, barang, total, nominal, kembali }) {
  const [tanggal, setTanggal] = useState(
    (tgl && formatDate(tgl)) || formatDate()
  );
  if (!tgl)
    setInterval(() => {
      setTanggal(formatDate());
    }, 1000);

  return (
    <div className="my-6">
      <div className="StyledReceipt">
        <header className="text-center">
          <h1 className="text-3xl font-bold">Nama Toko</h1>
          <p>Alamat Tokooooooo jevshdndb</p>
        </header>
        <hr className="border-[1px] border-dashed border-extraLight mb-2" />
        <div className="receipt-item">
          <span>Nota</span>
          <span className="receipt-desc">0123456789</span>
        </div>
        <div className="receipt-item">
          <span>Operator</span>
          <span className="receipt-desc">Admin</span>
        </div>
        <div className="receipt-item">
          <span>Tanggal</span>
          <span className="receipt-desc">{tanggal}</span>
        </div>
        <hr className="border-[1px] border-dashed border-extraLight mb-2" />
        {barang.map((b, i) => (
          <div key={i} className="receipt-item">
            <div className="flex flex-col">
              <span className="leading-4 font-medium">{b.nama}</span>
              <span className="text-[0.8rem]">
                {b.qty} x Rp {b.harga}
              </span>
            </div>
            <span className="receipt-desc receipt-price">
              <span>Rp</span>
              <span>{format(b.qty * b.harga)}</span>
            </span>
          </div>
        ))}
        <hr className="border-[1px] border-dashed border-extraLight mb-2" />
        <div className="receipt-item">
          <span>Subtotal</span>
          <span className="receipt-desc receipt-price">
            <span>Rp</span>
            <span>{total}</span>
          </span>
        </div>
        <div className="receipt-item">
          <span>Bayar</span>
          <span className="receipt-desc receipt-price border-b-[1px] border-extraLight">
            <span>Rp</span>
            <span>{nominal}</span>
          </span>
        </div>
        <div className="receipt-item">
          <span>Kembali</span>
          <span className="receipt-desc receipt-price">
            <span>Rp</span>
            <span>{kembali}</span>
          </span>
        </div>
        <hr className="border-[1px] border-dashed border-extraLight mb-2" />
        <footer className="text-center">Terimakasih telah berbelanja</footer>
      </div>
    </div>
  );
}
