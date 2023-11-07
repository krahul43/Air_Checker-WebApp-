import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      {/* <Route path="/detail" element={<detail />}></Route> */}
    </Routes>
  );
}
export default AppRoutes;
