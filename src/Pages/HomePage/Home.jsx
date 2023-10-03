import HomeNews from "../Shard/HomeNews/HomeNews";
import LeftSideNavbar from "../Shard/LeftSideNav/LeftSideNavbar";
import RightSideNav from "../Shard/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div className="font-poppins">

            <h1 className="font-poppins"> this is home page</h1>

            <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="col-span-4 my-5 lg:col-span-1  ">
                    <LeftSideNavbar></LeftSideNavbar>
                </div>

                <div className="col-span-4 my-5 lg:col-span-2 ">
                    <HomeNews></HomeNews>
                </div>

                <div className="col-span-4 my-5 lg:col-span-1 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;