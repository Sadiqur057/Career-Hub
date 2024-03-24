import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;