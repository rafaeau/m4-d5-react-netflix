import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNavbar from './components/MyNavbar';
import TvShows from './components/TvShows';
import SingleMovie from './components/SingleMovie';
import MoviesRow from './components/MoviesRow';

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
