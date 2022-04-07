import { findNonSerializableValue } from "@reduxjs/toolkit";
import ListItem from "./ListItem";

const list = ({ movies, onListItemClick }) => {
    return ( 
        movies?.map( (movie) => <ListItem key={movie.id} {...movie} onListItemClick={onListItemClick} /> )
    ); 
};

export default list;