import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const MoviesCard = ({ movies }) => {
    return (
        <Container>
            <Row>
                {movies.results.map(movie => (
                    <Col lg={3} md={4} sm={6} key={movie.id}>
                        <Card className='mb-3'>
                            {movie.poster_path && (
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
                            )}
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>

                                <Card.Text>
                                    <div><strong>Released: </strong> {movie.release_date} </div>
                                    
                                    <div><strong>Average Rating: </strong> {movie.vote_average} </div>
                                </Card.Text>

                                <Button 
                                    as={Link}
                                    to={`/movie/${movie.id}`}
                                    variant='dark'                                       
                                    >Read more
                                </Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default MoviesCard