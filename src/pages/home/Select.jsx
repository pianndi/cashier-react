import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Select({ active, setActive }) {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-screen h-full bg-white z-[9999] transition ease-in-out duration-200">
        <div className="flex gap-1 p-2 pt-3">
          <Link
            to="/"
            replace
            className="flex items-center justify-center w-12 text-primary text-2xl aspect-square hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <input
            className="w-full p-2 bg-back rounded-lg focus:outline-0"
            type="search"
            placeholder="Cari nama barang"
          />
        </div>
        <div className="flex gap-2 items-center w-full px-2">
          <div>Kategori</div>
          <div className="flex flex-row gap-2 p-2 w-full scroll-m-0 overflow-scroll">
            <span className="border-2 border-light rounded-md px-1">Semua</span>
            <span className="border-2 border-light rounded-md px-1">Anu</span>
          </div>
        </div>
        <div className="scroll-auto bg-back w-full h-full"></div>
      </div>
    </>
  );
}
