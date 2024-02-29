import { useContext } from 'react'
import './filter.css'
import { Context } from '../../context/context'

const FilterBlock = () =>{

    const { state, dispatch } = useContext(Context)

    const findMovie = (e) =>{
        const name = e.target.value.trim().toLowerCase()
        dispatch({type:'FIND_MOVIE', payload:name})
    }
    const filterMovie = (e) =>{
        dispatch({type:'FILTER_MOVIE', payload: e.target.name})
    }
    return (
        <div className="filter-block p-3 rounded-3">
            <div className="form-group">
                <input key={'1'} type="text" className="form-control" placeholder='Kino nomini kiriting' onChange={findMovie}/>
            </div>
            <div className="btn-group " role="group" aria-label="Basic outlined example ">
                {btnName.map((btn, index) =>( 
                    <button key={index} type="button" name={btn.name} className={`btn-live ${state.newMovie == btn.name ? 'active-btn': ''}`} onClick={filterMovie}>{btn.label}</button>
                ))} 
            </div>
        </div>
    )
}
const btnName = [
    {name:'all', label:'Barcha Kinolar'},
    {name:'popular', label:"Ko'rilgan Kinolar"},
    {name:'most', label:"Ko'p ko'rilgan Kinolar"}
]

export default FilterBlock