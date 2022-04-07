import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from "../views/Detail";
import Home from "../views/Home";
import ResultsSearch from "../views/ResultsSearch";

export default function RoutesApp () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Detail/:id" element={<Detail />}/>
                <Route path="/ResultsSearch/:title" element={<ResultsSearch />}/>
            </Routes>
        </BrowserRouter>
    )
}