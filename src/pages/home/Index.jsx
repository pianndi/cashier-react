
import Customer from "./Customer";
import Saldo from "./Saldo";
import Add from "./Add";

export default function Home(props) {
  return (
    <div className="container mx-auto">
      <Saldo />
      <div className="mt-16 mb-24">
        <Customer />
        <Add />
      </div>
    </div>
  );
}
