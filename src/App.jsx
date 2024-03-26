import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Select from "./pages/home/Select";
import BottomNavBar from "./components/bottomNav/Index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="select" element={<Select />} />
        </Route>
      </Routes>
      <BottomNavBar />
    </>
  );
}

export default App;
