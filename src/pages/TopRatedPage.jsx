import Container from 'react-bootstrap/Container'
import MoviesCard from '../components/MoviesCard'
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'

const TopRatedPage = () => {
    const {data, isLoading, error, isError} = useQuery(['topRatedMovies'], getTopRated)

    return (
        <Container>
            <h1 className='text-center'>List of the top rated movies on TMDB.</h1>

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

export default TopRatedPage

