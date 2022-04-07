const Loading = ({message}) => {
    return (
        <div className="flex flex-col items-center h-full justify-center">
            <div 
                style={{borderTopColor:"transparent"}}
                className="animate-spin h-10 w-10 border-4 border-sky-500 border-solid rounded-full mt-5"
            />
            <p className="mt-3">{message}</p>
        </div>
    )
}

export default Loading;