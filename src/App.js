import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import TvShows from "./components/TvShows";
import MoviesRow from "./components/MoviesRow";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MyNavbar />
      <TvShows />
      <MoviesRow />
      <Footer />
    </>
  );
}
export default App;
