import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom"

const MovieDetails = ({ movie }) => {
    return (
        <Container>
            <h1 className='text-center'>{movie.title}</h1>
            <Card className='mb-3'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie-poster" className='w-50 p-3' />
                <Card.Body>
                        <div>
                            <div>Released: {movie.release_date} </div>
                        </div>
                        <div>
                            <div>Average rating: {movie.vote_average}</div>
                        </div>
                        <div>
                            <div>Overview: {movie.overview}</div>
                        </div>
                        <div>
                            <h3>Cast</h3>
                            <Row>
                                {movie.credits.cast.map(actor => (
                                    <Col lg={3} md={4} sm={6} key={actor.id}>
                                        <Card className='mb-3'>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} alt="actor-poster" />
                                            <Card.Body>
                                                <Card.Title>{actor.name}</Card.Title>
                                                <Card.Text>
                                                    <p>Plays: {actor.character} </p>
                                                </Card.Text>
                                                <Button
                                                    as={Link}
                                                    to={`/actor/${actor.id}`}
                                                    variant='dark'
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