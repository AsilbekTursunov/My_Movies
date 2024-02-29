
import AppInfo from './components/app-info/app-info';
import FilterBlock from './components/filter/filter';
import MoviesBlock from './components/movies/movies';
import NewMovies from './components/addmovie/new-movie';

import './app.css'; 
import { useEffect } from 'react';
const movie = [
  {id:1 ,title: 'Station to Station', url:'https://img.moviesjoy.is/resize/188x288/1a/3f/1a3f74272bb989bce90c7d05e1298f24/1a3f74272bb989bce90c7d05e1298f24.jpg', views:732,  watched:false, like:false},
  {id:2 ,title: 'Too Good To Be True', url:'https://img.moviesjoy.is/resize/188x288/7c/53/7c5311728c72a18986fd4fc2e27fd8f5/7c5311728c72a18986fd4fc2e27fd8f5.jpg', views:384,  watched:false, like:false},
  {id:3 ,title: 'Couple to Throuple', url:'https://img.moviesjoy.is/resize/188x288/ed/97/ed97bc582ca0e65bdc81c2e33c80297e/ed97bc582ca0e65bdc81c2e33c80297e.jpg', views:1913,  watched:false, like:false},
  {id:4 ,title: 'Born to Run', url:'https://img.moviesjoy.is/resize/188x288/e6/33/e6332e77100d58dbec2c674e5f47e561/e6332e77100d58dbec2c674e5f47e561.jpg', views:412,  watched:false, like:false},
  {id:5 ,title: 'Born in Synanon', url:'https://img.moviesjoy.is/resize/188x288/d0/96/d096d59cdbc3be3df5c54991c7ad0857/d096d59cdbc3be3df5c54991c7ad0857.jpg', views:814,  watched:false, like:false},
  {id:6 ,title: 'Meet Me in Rome', url:'https://img.moviesjoy.is/resize/188x288/43/6b/436b5d95f6d4a94d392fda3b87ba56c4/436b5d95f6d4a94d392fda3b87ba56c4.jpg', views:581,  watched:false, like:false},
  {id:7 ,title: 'Branding in Seongsu', url:'https://img.moviesjoy.is/resize/188x288/f7/13/f713d5ec6546af2d33c9e2d1beaf488a/f713d5ec6546af2d33c9e2d1beaf488a.jpg', views:274,  watched:false, like:false},
  {id:8 ,title: 'Girl in the Video', url:'https://img.moviesjoy.is/resize/188x288/4d/fe/4dfef057338178b33d1f25aa7a94bc16/4dfef057338178b33d1f25aa7a94bc16.jpg', views:401,  watched:false, like:false},
  {id:9 ,title: 'The Impossible Heir', url:'https://img.moviesjoy.is/resize/188x288/bd/6b/bd6ba1be8b9830291b462f960c022ea9/bd6ba1be8b9830291b462f960c022ea9.jpg', views:801,  watched:false, like:false},
  {id:10 ,title: 'The Way', url:'https://img.moviesjoy.is/resize/188x288/b5/7e/b57efcba4c67b1bc6a3a57c578c45c37/b57efcba4c67b1bc6a3a57c578c45c37.jpg', views:1584,  watched:false, like:false},
  {id:11 ,title: 'The Stepdaughter', url:'https://img.moviesjoy.is/resize/188x288/27/c1/27c1af49d3b2eb387ece345324ac548c/27c1af49d3b2eb387ece345324ac548c.jpg', views:451,  watched:false, like:false},
  {id:12 ,title: 'Prey for the Bride', url:'https://img.moviesjoy.is/resize/188x288/2d/ae/2dae28211ba8b4afbcfaa9f27cadeb3c/2dae28211ba8b4afbcfaa9f27cadeb3c.jpg', views:623,  watched:false, like:false}
]
const App = () =>{ 

  // useEffect(()=>{
  //   localStorage.setItem('movie',JSON.stringify(movie))
  // },[])
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