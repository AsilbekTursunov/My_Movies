import { useContext, useState } from 'react';
import './new-movie.css'
import { Context } from '../../context/context';

const NewMovies = (props) =>{
    const {state, dispatch} = useContext(Context)
    const [localState, setLocalState] = useState({ name:'', view:'', url:''  })

    const addName = (e) => { setLocalState({...localState, [e.target.name]: e.target.value }) } 
    const inputValue = (e) =>{   
        if ((localState.name.length===0) && (localState.view.length===0) && (localState.url.length===0)) return 
        if(localState.name.length > 0 && localState.view.length > 0 && localState.url.length > 0){ 
            dispatch({type:'ADD_MOVIE', payload:localState})
            setLocalState({ 
                name:'',
                view:'',
                url:''  
            })
        } 
    }

    return(
        <div> 
            <form className='new-movies mx-auto rounded-3  p-3 justify-content-between gap-3' onSubmit={inputValue}  >
                <input className='new-movies-input form-control my-2 ' type="text" name="name" placeholder='Kino nomini kiriting' onChange={addName}  value={localState.name}/>
                <input className='new-movies-input form-control my-2 ' type="number" name="view" placeholder="Necha marta ko'rilgan" onChange={addName} value={localState.view}/>
                <input className='new-movies-input form-control my-2 ' type="text" name="url" placeholder="Rasm url manzil" onChange={addName} value={localState.url}/>
                <button type='submit' className='btn-live my-2  rounded-2'  > Qo'shish </button> 
            </form>
        </div>
    )

}     
export default NewMovies;