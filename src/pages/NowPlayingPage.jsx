import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import {Link} from 'react-router-dom'
import { useQuery } from 'react-query'
import { getNowPlaying } from '../services/TMDBAPI'

const NowPlayingPage = () => {
    const {data, isLoading, error, isError} = useQuery(['theatreMovies'], getNowPlaying)

    return (
        <Container>
            <h1>List of movies playing in theatres in the US.</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>An error occured: {error.message}</p>)}
            {data && (
                <Row>
                    {data.results.map(movie => (
                        <Col lg={3} md={4} sm={6} key={movie.id}>
                            <Card className='mb-3'>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>
                                        <span>Released: {movie.release_date} </span>
                                        <span>Average rating: {movie.vote_average}</span>
                                    </Card.Text>
                                    <Button 
                                        as={Link}
                                        to={`/movie/${movie.id}`}
                                        variant="primary"                                        
                                        >Read more
                                    </Button>
                                </Card.Body>
                            </Card> 
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    )
}

export default NowPlayingPage