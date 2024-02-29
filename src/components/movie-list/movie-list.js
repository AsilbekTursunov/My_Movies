import { useContext } from 'react'
import './movie-list.css'
import { Context } from '../../context/context'

const MovieItems = (data) =>{ 

    const {id, title, url, views, watched, like} = data
    const {state, dispatch} = useContext(Context)

    const removeMovie = () =>{
        dispatch({type:'ON_DELETE', payload:id})
    }
    const onFavourite = (e) => {
        const favourite = e.currentTarget.getAttribute('data-toggle')
        dispatch({type:'ON_FAVOURITE', payload:{id,favourite}})
    }
    return (   
        <div className="movie-card col-6    col-sm-6 col-md-4 col-lg-3  col-xl-2" > 
            <div className="movie-img"><img src={url} /></div>
            <div className="card-info d-flex flex-column justify-content-between">
                <div className="movie-info">
                    <h3 className="movie-title">{title}</h3>
                    <div className="movie-genre d-flex justify-content-between">
                        <span className='genre-title d-inline-block'>Viewed</span>
                        <span className='genre-name d-inline-block '>{views}</span>
                    </div>
                </div>
                <div className="movie-feedback d-flex justify-content-between">
                    <button type="button"><i className={`${watched ? 'fa-solid' : 'fa-regular'} fa-square-check`} onClick={onFavourite}  data-toggle="watched" ></i></button>
                    <button type="button"><i className={`${like ? 'fa-solid' : 'fa-regular'} fa-heart`} onClick={onFavourite} data-toggle="like" ></i></button> 
                    <button type="button"><i className="fa-regular fa-trash-can" onClick={removeMovie}></i></button>
                </div>
            </div>
        </div> 
    )
} 
export default MovieItems;  