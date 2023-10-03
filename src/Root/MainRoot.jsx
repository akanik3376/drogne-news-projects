import { Outlet } from "react-router-dom";
import BrakingNews from "../Pages/Shard/Header/BrakingNews";
import Header from "../Pages/Shard/Header/Header";
import Navbar from "../Pages/Shard/Navbar/Navbar";


const MainRoot = () => {
    return (
        <div className="max-w-6xl mx-auto  font-poppins">
            <div className=" space-y-2">
                <Header></Header>
                <BrakingNews></BrakingNews>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;