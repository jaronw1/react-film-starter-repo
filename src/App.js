
import logo from './logo.svg';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [films, setFilms] = useState(TMDB.films)
  const [current,setCurrent]=useState({})
  const handleDetailsClick = film => {
    setCurrent(film)}

    useEffect(()=> {
      const movieRequest = async () => {
        try {
          const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`
          console.log(popularFilmsUrl)
          const response = await axios.get(popularFilmsUrl)
          setFilms(response.data.results)
        }catch(error) {
          console.log(error)
        }
      }
      movieRequest()
    }, [])
  
  return(
    <div className="App">
           <div className="film-library">
              <FilmList 
              films={films}
              handleDetailsClick={handleDetailsClick}
              />
              <Details film={current}/>
          </div>
      </div>
  )
}










// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="film-library">
//           <FilmList films={TMDB.films}/>
//           <Details films={TMDB.films}/>
//       </div>
//       </div>
//     );
//   }
// }

export default App;