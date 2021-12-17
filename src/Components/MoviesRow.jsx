//key = 99963efb
import {Component} from 'react'
import SingleMovie from './SingleMovie'
import Alert from 'react-bootstrap/Alert'
import { Spinner } from "react-bootstrap";
class MoviesRow extends Component{
    
    state= {
        movies:[],
        movies2:[],
        movies3:[],
        isLoading: true,
        isError: false,
    }

    componentDidMount =()=>{
        this.fetchMovies()
        this.fetchMovies2()
        this.fetchMovies3()
    }
        
    fetchMovies = async () => {
        try {
          let response = await fetch(
            "https://www.omdbapi.com/?apikey=b2d7b7f8&s=harry-potter"
          );
          if (response.ok) {
            let data = await response.json();
            this.setState({
              movies: data.Search,
              isLoading: false,
            });
            console.log(this.state.movies);
          } else {
            // if we fall here we're getting an error, maybe a 404
            this.setState({
              isLoading: false,
              isError: true,
            });
          }
        } catch (error) {
          this.setState({
            isLoading: false,
            isError: true,
          });
        }
      };
    
      fetchMovies2 = async () => {
        try {
          let response = await fetch(
            "https://www.omdbapi.com/?apikey=b2d7b7f8&s=lord"
          );
          if (response.ok) {
            let data = await response.json();
            this.setState({
              movies2: data.Search,
              isLoading: false,
            });
            console.log(this.state.movies2);
          } else {
            // if we fall here we're getting an error, maybe a 404
            this.setState({
              isLoading: false,
              isError: true,
            });
          }
        } catch (error) {
          this.setState({
            isLoading: false,
            isError: true,
          });
        }
      };
    
      fetchMovies3 = async () => {
        try {
          let response = await fetch(
            "https://www.omdbapi.com/?apikey=b2d7b7f8&s=avengers"
          );
          if (response.ok) {
            let data = await response.json();
            this.setState({
              movies3: data.Search,
              isLoading: false,
            });
            console.log(this.state.movies2);
          } else {
            // if we fall here we're getting an error, maybe a 404
            this.setState({
              isLoading: false,
              isError: true,
            });
          }
        } catch (error) {
          this.setState({
            isLoading: false,
            isError: true,
          });
        }
      };
    render(){
        return(
        <div>
        <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-dark">Harry Potter</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {this.state.isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {this.state.movies
                .slice(0, 6)
                .map((res) => (
                  <SingleMovie src={res.Poster} />
                ))}
            </div>
          </div>
        </section>

        <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-dark">Lord Of The Rings</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {this.state.isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {this.state.movies2
                .slice(0, 6)
                .map((res) => (
                  <SingleMovie src={res.Poster} />
                ))}
            </div>
          </div>
        </section>

        <section>
          <div class="container-fluid mt-1 ml-6">
            <div class="mb-2">
              <h4 class="d-table-cell mb-0 text-dark">The Avengers</h4>
            </div>

            <div class="row mx-n1 mb-lg-5">
              {this.state.isLoading && (
                <Spinner animation="border" variant="info" />
              )}
              {this.state.movies3
                .slice(0, 6)
                .map((res) => (
                  <SingleMovie src={res.Poster} />
                ))}
            </div>
          </div>
        </section>
      </div>
      )
    }
}
export default MoviesRow