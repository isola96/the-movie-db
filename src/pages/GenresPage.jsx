import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getGenres } from "../services/TMDBAPI"

const GenresPage = () => {
    const {data, isLoading, error, isError} = useQuery(['genres'], getGenres)

    return (
        <Container>
            <h1>Genres</h1>

            {isLoading && (<p>Loading movies...</p>)}

            {isError && (<p>An error occured: {error.message}</p>)}

            {data && (
                <>
                    {data.genres.map(genre => (
                        <div key={genre.id}>
                            <div>{genre.name}</div>
                            <Button
                                as={Link}
                                to={`/genres/${genre.id}`}
                                >Read More
                            </Button>
                        </div>
                    ))}
                </>
            )}
        </Container>
  )
}

export default GenresPage