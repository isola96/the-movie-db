import { Card } from "react-bootstrap"

const MovieDetails = ({ movie }) => {
    return (
        <>
            <h1>{movie.title}</h1>
            <Card className='mb-3'>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
                <Card.Body>
                    <Card.Text>
                        <span>Released: {movie.release_date} </span>
                        <span>Average rating: {movie.vote_average}</span>
                    </Card.Text>
                </Card.Body>
            </Card> 

        </>
    )
}

export default MovieDetails