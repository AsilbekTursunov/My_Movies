import { React, createContext, useReducer } from "react";

const initialValue = {
    localdata: JSON.parse(localStorage.getItem('movie')) ?  JSON.parse(localStorage.getItem('movie')) : [] ,
    newMovie:'all',
    filterName:''
}

export const Context = createContext()



const reducer = (state = initialValue, action) =>{
    const { type, payload } = action 
    switch (type) {
        // case 'GET_DATA':
        //         localStorage.setItem('movie',JSON.stringify(payload))
        //      return 
        case 'ON_DELETE':  
            const newarr = state.localdata.filter(item => item.id !== payload) 
            localStorage.setItem('movie',JSON.stringify(newarr))
            return {...state, localdata: newarr}
        case 'ADD_MOVIE':
            const dataLength = state.localdata.length
            const {name, url, view}= payload 
            const newdata = [...state.localdata, {id:(dataLength + 1) ,title: name, url:url, views: view,  watched:false, like:false}] 
            localStorage.setItem('movie',JSON.stringify(newdata))
            return ({...state, localdata:newdata}) 
        case 'ON_FAVOURITE':
            const newarray = state.localdata.map(item =>{
                if (item.id===payload.id) {
                  return {...item, [payload.favourite]:!item[payload.favourite]}
                }
                 return item
              }) 
            localStorage.setItem('movie',JSON.stringify(newarray)) 
            return {...state, localdata:newarray }
        case 'FIND_MOVIE': 
            return {...state, filterName:payload}
        case 'FILTER_MOVIE':
            return {...state, newMovie:payload}
        default:
            break;
    }
}
const Provider = ({ children }) =>{
    const [state, dispatch] = useReducer(reducer, initialValue)

    return <Context.Provider value={{state, dispatch}} >{ children }</Context.Provider>
}
export default Provider;