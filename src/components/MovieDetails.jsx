import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"

const MovieDetails = ({ movie }) => {
    return (
        <Container>
            <h1>{movie.title}</h1>
            <Card className='mb-3'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie-poster" />
                <Card.Body>
                        <div>
                            <span>Released: {movie.release_date} </span>
                        </div>
                        <div>
                            <span>Average rating: {movie.vote_average}</span>
                        </div>
                        <div>
                            <h3>Cast</h3>
                            <Row>
                                {movie.credits.cast.map(actor => (
                                    <Col key={actor.id}>
                                        <Card className='mb-3'>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} alt="actor-poster" />
                                            <Card.Body>
                                                <Card.Title>{actor.name}</Card.Title>
                                                <Card.Text>
                                                    <span>Plays: {actor.character} </span>
                                                </Card.Text>
                                                <Button
                                                    as={Link}
                                                    to={`/actor/${actor.id}`}
                                                    >Read more
                                                </Button>
                                            </Card.Body>
                                        </Card> 
                                    </Col>
                                ))}
                            </Row>
                        </div>
                </Card.Body>
            </Card> 
        </Container>
    )
}

export default MovieDetails