const ListItem = ({id, image, title, onListItemClick}) => {

    const handleListItemClick = () => {
        const idArray = id.split('/');
        id = idArray[ idArray.length - 2 ];

        onListItemClick(id);
    };

    return (
        <div className="mt-8 flex flex-row w-full h-1/5" 
        //style={{ minWidth: 650}}
        > 
            <div className="w-1/5  h-full">
                <img src={image?.url} alt={title} className=""/>
            </div>
            <div className="w-4/5 h-full flex flex-col items-start px-6 ">
                <p className="font-inter text-lg ">{title ?? 'Sin titulo'}</p>
                <div className="flex h-full items-end">
                    <button 
                    className="border-2 border-sky-500 rounded-md w-48 h-7 text-sm text-sky-500 hover:bg-sky-500 hover:text-white"
                    onClick={handleListItemClick}
                    >Ver más</button>
                </div>
            </div>
        </div>
        )
};

export default ListItem;