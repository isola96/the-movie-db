import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getGenres } from "../services/TMDBAPI"

const GenresPage = () => {
    const {data, isLoading, error, isError} = useQuery(['genres'], getGenres)

    return (
        <Container>
            <h1 className='text-center'>Genres</h1>

            {isLoading && (<p>Loading movies...</p>)}

            {isError && (<p>An error occured: {error.message}</p>)}

            {data && (
                <>
                    <Container>
                        <Row>
                            {data.genres.map(genre => (
                                <Col lg={3} md={4} sm={6} key={genre.id}>
                                    <Card className='mb-4 mt-4 text-center'>
                                        <Card.Title>{genre.name}</Card.Title>
                                        
                                        <Card.Body>
                                            <Button
                                                as={Link}
                                                to={`/genres/${genre.id}`}
                                                variant='dark'
                                                >Read More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </>
            )}
        </Container>
  )
}

export default GenresPage