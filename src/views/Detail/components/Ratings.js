import yellowStar from "../../../assets/yellow-star.png";

const Ratings = ({rating}) => {
    return (
        <div className="flex flex-row my-1 items-center">
            <span className="text-xl font-bold w-full ">{rating}</span>
            <img src={yellowStar} className="ml-1 mt-1 w-6 h-6" alt="rating-star" />
        </div>
    )
};

export default Ratings;