import { React, useContext } from 'react';
import { filterData, foundMovie } from '../../utilities/filter-data';
import MovieItems from '../movie-list/movie-list';
import './movies.css'
import { Context } from '../../context/context';

const MoviesBlock = () =>{  

    const {state, dispatch} = useContext(Context)
    console.log(state);
    const localData = foundMovie(filterData(state.localdata, state.newMovie), state.filterName) 
    return( 
        <div className="movies-block rounded-3 p-2 row mx-auto">
                {localData.map(item => (
                    <MovieItems 
                        key = {item.id} 
                        id = {item.id}
                        title = {item.title} 
                        url = {item.url} 
                        views = {item.views} 
                        watched = {item.watched} 
                        like = {item.like}
                        
                    />
                ))}      
        </div>
    )
}
export default MoviesBlock;