
function RightSideNav() {
    return (
        <div>
            <h2 className="text-2xl font-semibold">Login with</h2>
            <div>
                <h4 className="text-blue-600 py-2 mt-3 text-center border border-blue-500 rounded  ">Login with google</h4>
                <h4 className=" py-2 mt-3 text-center border border-black rounded ">Login with Github</h4>

            </div>
            <div className="mt-7">
                <h4 className="text-2xl font-semibold">Find Us On</h4>
                <div className="mt-3">
                    <p className="border py-2 pl-5  rounded-t"><a href="">Facebook</a></p>
                    <p className=" border-x py-2 pl-5"><a href="">Twitter</a></p>
                    <p className="border py-2 pl-5  rounded-b"><a href="">Instagram</a></p>

                </div>
            </div>
            <div className="mt-9">
                <h4 className="text-2xl font-semibold p-4">Q-Zone</h4>
                <div className="mt-6 p-4">
                    <div className=" bg-base-100 ">
                        <figure><img src="https://i.ibb.co/L6ZWXLt/vector-children-in-classroom-scene.jpg" alt="Shoes" /></figure>
                        <div className="mt-4">
                            <h2 className="text-center font-poppins text-xl font-medium">Class</h2>

                        </div>
                    </div>

                </div>
                <div className="">
                    <div className=" bg-base-100 p-4">
                        <figure><img src="https://i.ibb.co/h14dwk1/acb9c38c21a2aebaf9b13e199859c6e5.jpg" alt="Shoes" /></figure>
                        <div className="mt-4">
                            <h2 className="text-center font-poppins text-xl font-medium">Swimming</h2>

                        </div>
                    </div>

                </div>
                <div className="mt-4">
                    <div className="bg-base-100 p-4">
                        <figure><img src="https://i.ibb.co/zhHVJ9f/children-playing-in-the-playground-vector.jpg" alt="Shoes" /></figure>
                        <div className="mt-4">
                            <h2 className="text-center font-poppins text-xl font-medium"> Play Ground</h2>

                        </div>
                    </div>

                </div>
                <div className="mt-8 ">
                    <div className=" bg-gradient-to-r from-blue-950 via-indigo-400 to-blue-950 p-4">
                        <h1 className="text-4xl font-bold text-center mt-6">Create an Amazing Newspaper</h1>
                        <div className="card-body text-center">

                            <p className="text-lg mt-6">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

                            <button className="bg-[#D72050] py-4 px-5 text-xl font-semibold text-white my-6">Learn More</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RightSideNav;