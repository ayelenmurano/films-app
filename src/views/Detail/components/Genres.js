const Genres = ({genres}) => {
    return (
<       div className="flex flex-row my-1 text-left text-xs"> 
            <span className="font-bold mr-1">Género:</span>
            {genres?.length > 0 && genres?.map((value, index) => (
                <span key={index}> 
                    {`${value}${index !== genres?.length - 1 ? ',' : ''}`} 
                </span>
            ))}
        </div>
    )
};

export default Genres;