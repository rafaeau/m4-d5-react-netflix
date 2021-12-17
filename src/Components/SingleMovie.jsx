import {Component} from 'react'


class SingleMovie extends Component{
  render(){
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 px-1 mb-4 mb-lg-0">
          <img src={this.props.src} className="w-100 img-fluid" alt="movie" />
          {console.log(this.props.src)}
      </div>
      )
  }
  
}
export default SingleMovie;