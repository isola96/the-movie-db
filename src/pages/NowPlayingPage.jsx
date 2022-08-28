import Container from 'react-bootstrap/Container'
import MovieCard from '../components/MovieCard'
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
                <>
                    <MovieCard movies={data}/>
                </>
            )}
        </Container>
    )
}

export default NowPlayingPage