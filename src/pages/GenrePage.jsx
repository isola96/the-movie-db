import Container from 'react-bootstrap/Container'
import { useParams, useSearchParams } from 'react-router-dom'
import useGenre from '../hooks/useGenre'
import MovieInfo from '../components/MovieInfo'
import Pagination from '../components/Pagination'

const GenrePage = () => {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams({query: '', page: 1})
    const page = searchParams.get('page')
    const {data, isLoading, error, isError, isPreviousData} = useGenre(id, page)

    return (
        <Container>
            {isLoading && (<p>Loading genres...</p>)}

            {isError && (<p>An error occured {error.message}</p>)}
            
            {data && (
                <>
                    <MovieInfo movies={data} /> 

                    <Pagination page={page} changePage={setSearchParams} isPreviousData={isPreviousData}/>
                </>
            )}
        </Container>
  )
}

export default GenrePage