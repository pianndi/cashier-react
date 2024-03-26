import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faWallet,
  
} from "@fortawesome/free-solid-svg-icons";

export default function Saldo(props) {
  return (
    <header className="fixed top-0 left-0 w-screen z-[9999]">
      <div className="flex flex-row items-center divide-x-2 divide-light justify-between border-2 border-light bg-white m-2 rounded-md shadow-lg">
        <div>
          <span className="px-4 text-primary"><FontAwesomeIcon icon={faWallet} /></span>
          <span>Rp 12.345.678</span>
        </div>
        <Link>
          <div className="flex justify-center items-center w-10 aspect-square">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
          </div>
        </Link>
      </div>
    </header>
  );
}
