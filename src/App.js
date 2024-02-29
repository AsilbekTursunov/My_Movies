
import AppInfo from './components/app-info/app-info';
import FilterBlock from './components/filter/filter';
import MoviesBlock from './components/movies/movies';
import NewMovies from './components/addmovie/new-movie';

import './app.css'; 

const App = () =>{ 
  return (
    <div className="container"> 
      <div className="App">
        <AppInfo  /> 
        <FilterBlock />
        <MoviesBlock  />
        <NewMovies />
      </div>
    </div>
  );
} 

export default App; 