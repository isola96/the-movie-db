import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const ActorDetails = ({ data }) => {
    return (
        <Container>
            <h1>{data.name}</h1>

            <Card className='mb-3'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${data.profile_path}`} alt="actor-poster" />

                <Card.Body>
                    <div>
                        <span>Born: {data.birthday} </span>
                    </div>

                    <div>
                        <span>In: {data.place_of_birth} </span>
                    </div>

                    <div>
                        <p>Biography: {data.biography}</p>
                    </div>

                    <div>
                        <h3>Filmography: </h3>

                        <Row>
                            {data.credits.cast.map(movie => (
                                <Col key={movie.id}>
                                    <Card className='mb-3'>
                                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="movie-poster"/>
                                        <Card.Body>
                                            <Card.Title>{movie.name}</Card.Title>
                                            <div>
                                                <span>Released: {movie.release_date} </span>
                                            </div>

                                            <div>
                                                <span>Average rating: {movie.vote_average}</span>
                                            </div>

                                            <Button
                                                as={Link}
                                                to={`/movie/${movie.id}`}
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

export default ActorDetails