import { useNavigate, useParams } from "react-router-dom";
import Chairs from "../../assets/movie-time.jpg";
import { useGetFilmByTitleQuery } from "../../redux/api/movies";
import Loading from "../../components/Loading";
import List from "./components/List";
import Error from "../../components/Error";

export default function ResultsSearch ( {search} ) {
    const navigate = useNavigate();

    const { title } = useParams();
    const { data, isLoading, isSuccess, isFetching, error } = useGetFilmByTitleQuery(title);
    const movies = data?.results

    const handleListItemClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    };

    return (
        <div className="flex flex-row ">
            <div className="w-3/5 h-screen overflow-y-auto px-2 py-2">
                <div className="bg-sky-200 h-8 text-center ">
                    <h1 className="inline-block align-middle">Resultados</h1>
                </div>
                <div className="px-8 h-full">
                    { error && <Error /> }
                    { ( isLoading || isFetching ) && <Loading message="Buscando películas..." /> }
                    { isSuccess && <List movies={movies} onListItemClick={handleListItemClick} /> }
                </div>
            </div>
            <div className="w-2/5 ">
                <img src={Chairs} alt="Movie Chairs" className="object-cover w-full h-full" />
            </div>
        </div>
    )
}