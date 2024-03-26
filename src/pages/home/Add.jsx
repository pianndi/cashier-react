import { useState } from "react";
import { Link } from "react-router-dom";
import Receipt from "./Receipt";
import Select from "./Select";
import { formatNumber as format, formatDate } from "../../utils/format.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Add(props) {
  const [barang, setBarang] = useState([]);
  const [harga, setHarga] = useState(Math.round(Math.random() * 25000));
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [nominal, setNominal] = useState(0);
  const [kembali, setKembali] = useState(0);

  const tambahBarang = (e) => {
    e.preventDefault();
    const newBarang = [...barang, { nama: "Testing", harga, qty }];
    setBarang(newBarang);
    const total = hitungTotal(newBarang);
    setTotal(total);

    setHarga(Math.round(Math.random() * 25000));
    setQty(0);
    setKembali(nominal - total);
  };
  const hapusBarang = (i) => {
    const newBarang = [...barang.filter((e, index) => index !== i)];
    setBarang(newBarang);
    const total = hitungTotal(newBarang);
    setTotal(total);
    setKembali(nominal - total);
  };
  const hitungTotal = (barang) => {
    let total = 0;
    for (const { harga, qty } of barang) {
      total += harga * qty;
    }
    return total;
  };
  const handleNominal = ({ target }) => {
    const nominal =
      (target.value && parseInt(target.value.split(".").join(""))) || 0;
    setKembali(nominal - total);
    setNominal(nominal);
  };

  return (
    <>
      <form onSubmit={tambahBarang}>
        <div className="add-product-container">
          <Link
            to="/select"
            className="add-product-item hover:bg-extraLight active:bg-extraLight"
          >
            <label htmlFor="barang">Barang</label>
            <div className="flex flex-row items-center justify-end">
              <div className="add-product-placeholder">Pilih barang...</div>
              <div className="arrow-right"></div>
            </div>
          </Link>
          <div className="add-product-item">
            <span>Harga</span>
            <span className="add-product-desc">Rp {format(harga)}</span>
          </div>
          <div className="add-product-item">
            <label htmlFor="qty">Quantity</label>
            <input
              className="add-product-input"
              type="text"
              inputMode="numeric"
              
              name="qty"
              id="qty"
              onChange={({ target }) => {
                setQty(
                  (target.value &&
                    parseInt(target.value.split(".").join(""))) ||
                    0
                );
              }}
              value={(qty && format(qty)) || ""}
              placeholder="0"
            />
          </div>
          <div className="add-product-item">
            <span>Sub-Total</span>
            <span className="add-product-desc font-semibold text-primary">
              Rp {format(qty * harga)}
            </span>
          </div>
          <div className="add-product-item">
            <button
              className="add-product-button"
              type="submit"
              disabled={qty <= 0}
            >
              Tambah
            </button>
          </div>
        </div>
      </form>
      {barang.length > 0 && (
        <div className="add-product-container">
          {barang.map((b, i) => (
            <div key={i} className="add-product-item">
              <div className="flex">
                <button
                  onClick={() => hapusBarang(i)}
                  className="mr-1 px-2 text-primary text-xl"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <div className="flex flex-col">
                  <span className="leading-4 font-medium">{b.nama}</span>
                  <span className="text-[0.8rem]">
                    {b.qty} x Rp {format(b.harga)}
                  </span>
                </div>
              </div>
              <span className="add-product-desc">
                Rp {format(b.qty * b.harga)}
              </span>
            </div>
          ))}
        </div>
      )}
      <div className="add-product-container">
        <div className="add-product-item">
          <span>Total Pembayaran</span>
          <span className="add-product-desc text-primary font-semibold">
            Rp {format(total)}
          </span>
        </div>
        <div className="add-product-item">
          <label htmlFor="nominal">Nominal</label>
          <input
            className="add-product-input"
            type="text"
            inputMode="numeric"
            name="nominal"
            id="nominal"
            onChange={handleNominal}
            value={(nominal && format(nominal)) || ""}
            placeholder="0"
          />
        </div>
        <div className="add-product-item">
          <span>Kembali</span>
          <span className="add-product-desc">Rp {format(kembali)}</span>
        </div>
        <div className="add-product-item">
          <button
            className="add-product-button"
            type="button"
            disabled={kembali <= 0 || barang.length <= 0}
          >
            Bayar
          </button>
        </div>
      </div>
      <Receipt
        barang={barang}
        total={format(total)}
        nominal={format(nominal)}
        kembali={format(kembali)}
      />
    </>
  );
}
