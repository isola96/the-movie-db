import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getNowPlaying } from '../services/TMDBAPI'

const NowPlayingPage = () => {
    const {data, isLoading, error, isError} = useQuery(['theatreMovies'], getNowPlaying)

    return (
        <Container>
            <h1>This is a list of movies playing in theatres in the US.</h1>

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

export default NowPlayingPage