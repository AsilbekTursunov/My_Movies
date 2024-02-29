
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
      <div className="copy-right rounded-3 p-3 text-center">  Copy Right By <a href="https://github.com/AsilbekTursunov">Asilbek Tursun</a></div>
    </div>
  );
} 

export default App; 