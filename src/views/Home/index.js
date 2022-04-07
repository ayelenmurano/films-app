import { useState } from "react";
import Chairs from "../../assets/chairs.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home () {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    // search = { target : {value } }
    const handleInputChange = ({target: {value}}) => {
        setSearch(value);
    };
    const handleCleanInput = ({target: {value}}) => {
        setSearch('');
    };
    const handleSearchClick = () => {
        navigate(`/ResultsSearch/${search.trim()}`)
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-3/5">
                <img src={Chairs} alt="Movie Chairs" className="w-full h-full object-cover" />
            </div>
            <div className="w-2/5 flex justify-center items-center flex-col font-inter px-10">
                <p className="text-2xl font-bold">Busca tu película...</p>
                <input 
                    className="bg-slate-100 w-full  my-3 h-9 p-1 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-400 "
                    value={search}
                    onChange={handleInputChange}
                />
                <div className="flex w-full justify-between">
                    <button 
                        className="bg-red-400 hover:bg-red-500 text-white front-lato w-full shadow-lg h-9"
                        style={{ width: '48%'}}
                        onClick={handleSearchClick}

                    >
                        Buscar
                    </button>
                    <button 
                        className="bg-red-400 hover:bg-red-500 text-white front-lato w-full shadow-lg h-9"
                        style={{ width: '48%'}}
                        onClick={handleCleanInput}
                    > 
                        Limpiar
                    </button>
                </div>
            </div>
        </div>
    );
}