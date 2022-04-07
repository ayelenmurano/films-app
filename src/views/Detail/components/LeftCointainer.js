const LeftContainer = ({ movieUrl }) => {
    return (
        <div className="w-1/3 flex justify-center">
                <img src={movieUrl} className="w-80" alt="image-movie" />
        </div>
    )
};

export default LeftContainer;