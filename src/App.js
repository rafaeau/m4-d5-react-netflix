import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './Components/MyNavbar';
import TvShows from './Components/TvShows';
import SingleMovie from './Components/SingleMovie';
import MoviesRow from './Components/MoviesRow';

function App() {
  return (
    <>
      <MyNavbar />
      <TvShows />
      <SingleMovie movie={'harry-potter'}/>
      <MoviesRow />
    </>
  );
}
export default App;
