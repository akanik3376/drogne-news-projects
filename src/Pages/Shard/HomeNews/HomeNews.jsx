import { useLoaderData } from "react-router-dom";
import Anews from "../../../Components/AllNews/Anews";

const HomeNews = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <h1 className="text-2xl font-semibold font-poppins">Dragon News Home</h1>

            {
                news?.map(aNews => <Anews key={aNews._id} news={aNews}></Anews>)
            }
        </div>
    );
};

export default HomeNews;