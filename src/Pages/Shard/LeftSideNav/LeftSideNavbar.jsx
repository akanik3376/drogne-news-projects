import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNavbar = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])


    return (
        <div>
            <h2 className="text-xl font-semibold mb-5">All Category: {news?.length}</h2>
            <div className="space-y-3  text-lg pl-4 md:pl-6 lg:pl-10">
                {
                    news?.map(newsData => <p key={newsData.id}>
                        <NavLink to={`/${newsData.id}`}>{newsData.name}</NavLink>
                    </p>)
                }
            </div>

        </div>
    );
};

export default LeftSideNavbar;