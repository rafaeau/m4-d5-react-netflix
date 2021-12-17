import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import SingleFilm from "./SingleFilm"
import { render } from "@testing-library/react"

class Search extends React.Component {

    state = {
        searchQuery: "",
    }

    render() {
        return (
            <Container fluid className="my-3">
                <Row className="d-flex justify-content-center">
                    <Form.Group controlId="formSearch">
                        <Form.Label> <b>SEARCH</b> </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Search here"
                            value={this.state.searchQuery}
                            onChange={e => this.setState({ searchQuery: e.target.value })}
                        />
                    </Form.Group>
                </Row>
                <Row className="d-flex justify-content-center"> 
                    {
                        this.props.films.filter( film => film.title.toLowerCase().includes(this.state.searchQuery)).map( film => (
                            <Col xs={12} md={3} lg={2} className="my-2 p-0 mx-1 d-flex justify-content-center" key={book.asin}>
                                <SingleFilm film={film}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }

}



export default Search;