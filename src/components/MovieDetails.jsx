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
                {movie.poster_path && (
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} className='w-50 p-3' />
                )}
                <Card.Body>
                        <div>
                            <strong>Released: </strong>
                        </div> 
                        
                        <span>{movie.release_date} </span>
                    
                        <div>
                            <strong>Average rating: </strong>
                        </div> 
                        
                        <span> {movie.vote_average}</span>
                    
                        <div>
                            <strong>Overview: </strong>
                        </div> 

                        <span> {movie.overview}</span>
                        
                        <div>
                            <h3>Cast: </h3>

                            <Row>
                                {movie.credits.cast.map(actor => (
                                    <Col lg={3} md={4} sm={6} key={actor.id}>
                                        <Card className='mb-3'>
                                            {actor.profile_path && (
                                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`} />
                                            )}
                                            <Card.Body>
                                                <Card.Title>{actor.name}</Card.Title>

                                                <Card.Text>
                                                    <span><strong>Plays: </strong>{actor.character} </span>
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