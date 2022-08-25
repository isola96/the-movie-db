import Container from 'react-bootstrap/Container'
import { useParams } from 'react-router-dom'
import useGenre from '../hooks/useGenre'
import MovieInfo from '../components/MovieInfo'

const GenrePage = () => {
    const { id } = useParams()
    const {data, isLoading, error, isError} = useGenre(id)

    return (
        <Container>
            {isLoading && (<p>Loading genres...</p>)}

            {isError && (<p>An error occured {error.message}</p>)}
            
            {data && <MovieInfo movies={data} /> }
        </Container>
  )
}

export default GenrePage