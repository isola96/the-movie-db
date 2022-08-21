import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getTopRated } from '../services/TMDBAPI'

const TopRatedPage = () => {
    const {data, isLoading, error, isError} = useQuery(['topRatedMovies'], getTopRated)

    return (
        <Container>
            <h1>List of the top rated movies on TMDB.</h1>

            {isLoading && (<p>Loading movies...</p>)}
            {isError && (<p>ERROR {error.message}</p>)}
            {data && (
                <ul>
                    {data.results.map(i => (
                        <li key={i.id}>{i.title}</li>
                    ))}
                </ul>
            )}
        </Container>
    )
}

export default TopRatedPage

