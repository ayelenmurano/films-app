import Cast from "./Cast";
import Genres from "./Genres";
import Ratings from "./Ratings";

const RightContainer = ({title, year, rating, plotSummary, genres, cast}) => {
    return (
        <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 mx-7 justify-center">
                <h2 className="text-3xl font-bold  my-1">
                    {`${title} (${year})`}
                </h2>
                {rating && <Ratings rating={rating} />}
                <p className="text-left text-xs">
                    {plotSummary}
                </p>
                {genres && <Genres genres={genres} />}
                {cast && <Cast cast={cast} />}
        </div>
    )
};

export default RightContainer;