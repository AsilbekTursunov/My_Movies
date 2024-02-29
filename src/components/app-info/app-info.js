import { useContext } from 'react'
import './app-info.css'
import { Context } from '../../context/context'

const AppInfo = () =>{  
 
    const {state, dispatch} = useContext(Context)

    const likedMovies = state.localdata.filter(item => item.watched).length 
    return ( 
        <div className='app-info w-100 p-3 rounded-3 row mx-auto'>
            <h1 className="all-movies col-sm-12 col-lg-6">Barcha kinolar: {state.localdata.length} </h1>
            <h1 className="like-movies col-sm-12 col-lg-6">Ko'rilgan kinolar: {likedMovies} </h1>
        </div> 
    )
}
export default AppInfo; 