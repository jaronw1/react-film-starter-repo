
import logo from './logo.svg';
import './App.css';
import FilmList from './FilmList';
import Details from './Details';
import TMDB from './TMDB';



function App() {
  return(
    <div className="App">
           <div className="film-library">
              <FilmList films={TMDB.films}/>
              <Details films={TMDB.films}/>
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