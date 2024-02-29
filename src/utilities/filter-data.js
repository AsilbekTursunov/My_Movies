const filterData = (data, name) =>{
    switch(name){ 
      case 'popular':
        return data.filter(item => item.watched) 
      case 'most':
        return data.filter(item => item.views > 500)
      default:
        return data
    } 
  }

  const foundMovie = (data, name)=>{ 
    if (name.length===0) {
      return data
    }  
      return data.filter(item => item.title.toLowerCase().indexOf(name) > -1)
  }


  export {filterData, foundMovie}