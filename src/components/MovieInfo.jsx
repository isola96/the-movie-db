import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"

const MovieInfo = ({ movies }) => {
    return (
        <Container>
            <Row>
                {movies.results.map((movie) => 
                    <Col lg={3} md={4} sm={6} key={movie.id}>
                        <Card className='mb-3'>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
                            <Card.Body>
                                    <div>
                                        <span>Released: {movie.release_date} </span>
                                    </div>
                                    <div>
                                        <span>Average rating: {movie.vote_average}</span>
                                    </div>
                                    <div>
                                        <Button
                                            as={Link}
                                            to={`/movie/${movie.id}`}
                                            >Read more
                                        </Button>
                                    </div>
                            </Card.Body>
                        </Card> 
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default MovieInfo