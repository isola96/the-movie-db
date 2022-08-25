import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const MovieDetails = ({ movies }) => {
    return (
        <Container>
            {movies.results.map((movie) => 
                <Card key={movie.id} className='mb-3'>
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
            )}
        </Container>
    )
}

export default MovieDetails