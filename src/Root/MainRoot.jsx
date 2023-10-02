import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainRoot = () => {
    return (
        <div className="max-w-5xl mx-auto border">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;