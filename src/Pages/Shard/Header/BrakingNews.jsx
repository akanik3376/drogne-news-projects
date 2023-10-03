import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary text-white font-medium text-xl">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <p className="mr-12"> I can be a React component, multiple React components, or just some text...</p>
                <p className="mr-12"> I can be a React component, multiple React components, or just some text...</p>
                <p className="mr-12"> I can be a React component, multiple React components, or just some text...</p>
            </Marquee>
        </div>
    );
};

export default BrakingNews;