import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const SearchBar = () => {
    return (
        <>
            <Row className="d-flex justify-content-center my-4">
                <Col xs="5">
                    <Form.Group controlId="search-film" className="mb-3 text-center">
                        <Form.Label>Search your film</Form.Label>
                        <Form.Control type="text" placeholder="write the title here"/>
                    </Form.Group>
                </Col> 
            </Row>
        </>
    )
}

export default SearchBar