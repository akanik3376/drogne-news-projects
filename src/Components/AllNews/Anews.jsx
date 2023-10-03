/* eslint-disable react/prop-types */

const Anews = ({ news }) => {
    console.log(news)
    const { title, total_view, image_url, details, rating, author } = news
    return (
        <div className="mt-5">
            <div className="flex items-center gap-3">
                <img className="w-16 rounded-full" src={author?.img} alt="" />
                <div>
                    <h6>{author?.name}</h6>
                    <p>{author?.published_date}</p>
                </div>
            </div>
            <div className=" bg-base-100 ">
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>

                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="mt-3">

                    <p>{details}</p>
                    <div className="flex justify-end">
                        <p>{5}</p>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anews;