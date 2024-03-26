import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBagShopping,
  faNoteSticky,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNavBar(props) {
  return (
    <nav className="flex flex-row justify-around fixed bottom-0 left-0 w-screen bg-white py-1 border-2 border-light">
      <NavLink replace className="nav-item" to="/">
        <div className="nav-item-icon">
          <FontAwesomeIcon icon={faHouse} />
        </div>
        <span className="font-medium text-[14px]">Beranda</span>
      </NavLink>
      <NavLink replace className="nav-item" to="/barang">
        <div className="nav-item-icon">
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
        <span className="font-medium text-[14px]">Barang</span>
      </NavLink>
      <NavLink replace className="nav-item" to="/laporan">
        <div className="nav-item-icon">
          <FontAwesomeIcon icon={faNoteSticky} />
        </div>
        <span className="font-medium text-[14px]">Laporan</span>
      </NavLink>
      <NavLink replace className="nav-item" to="/saya">
        <div className="nav-item-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
        <span className="font-medium text-[14px]">Saya</span>
      </NavLink>
    </nav>
  );
}
