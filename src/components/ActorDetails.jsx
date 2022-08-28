import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'

const ActorDetails = ({ data }) => {
    return (
        <Container>
            <h1 className='text-center'>{data.name}</h1>

            <Card className='mb-3'>
                {data.profile_path && (
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${data.profile_path}`} className='w-50 p-3' />
                )}
                <Card.Body>
                    <div>
                        <div>Born: {data.birthday} </div>
                    </div>

                    <div>
                        <div>In: {data.place_of_birth} </div>
                    </div>

                    <div>
                        <div>Biography: {data.biography}</div>
                    </div>

                    <div>
                        <h3>Filmography: </h3>

                        <Row>
                            {data.credits.cast.map(movie => (
                                <Col lg={3} md={4} sm={6} key={movie.id}>
                                    <Card className='mb-3'>
                                        {movie.poster_path && (
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
                                        )}
                                        <Card.Body>
                                            <Card.Title>{movie.name}</Card.Title>
                                            <div>
                                                <p>Released: {movie.release_date} </p>
                                            </div>

                                            <div>
                                                <p>Average rating: {movie.vote_average}</p>
                                            </div>

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
                    </div>
                </Card.Body>
            </Card> 
        </Container>
    )
}

export default ActorDetails