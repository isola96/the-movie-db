import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import useMovie from '../hooks/useMovie'
import MovieDetails from "../components/MovieDetails"

const MoviePage = () => {
    const { id } = useParams()
    const {data, error, isError, isLoading} = useMovie(id)

    return (
        <Container>
            {isLoading && (<p>Loading movie...</p>)}

            {isError && (<p>An error occured {error.message}</p>)}
            
            {data && <MovieDetails movie={data.data} /> }
        </Container>
    )
}

export default MoviePage