import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Customer(props) {
  return (
    <>
      <div className="add-product-container">
        <div className="add-product-item divide-x-2">
          <div className="flex items-center text-primary">
            <FontAwesomeIcon className="text-2xl p-2" icon={faCartShopping} />
            Cashier
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon className="text-2xl p-2" icon={faUsers} />
            Customers
          </div>
        </div>
      </div>
    </>
  );
}
