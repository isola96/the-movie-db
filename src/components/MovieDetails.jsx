import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from "react-router-dom"

const MovieDetails = ({ movie }) => {
    return (
        <>
            <h1>{movie.title}</h1>
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
                            <h3>Cast</h3>
                            {movie.credits.cast.map(actor => (
                                <div key={actor.id}>
                                    <span>{actor.name}</span>
                                    <Button
                                        as={Link}
                                        to={`/actor/${actor.id}`}
                                        >Read more
                                    </Button>
                                </div>
                            ))}
                        </div>
                </Card.Body>
            </Card> 
        </>
    )
}

export default MovieDetails