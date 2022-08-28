import Container from 'react-bootstrap/Container'
import MoviesCard from '../components/MoviesCard'
import { useQuery } from 'react-query'
import { getPopular } from '../services/TMDBAPI'

const PopularPage = () => {
    const {data, isLoading, error, isError} = useQuery(['popularMovies'], getPopular)

    return (
        <Container>
            <h1>List of the current popular movies on TMDB.</h1>

            {isLoading && (<p>Loading movies...</p>)}

            {isError && (<p>ERROR {error.message}</p>)}
            
            {data && (
                <>
                    <MoviesCard movies={data} />
                </>
            )}
        </Container>
    )
}

export default PopularPage

