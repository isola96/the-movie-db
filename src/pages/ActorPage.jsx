import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Card } from "react-bootstrap"
import useActor from "../hooks/useActor"

const ActorPage = () => {
    const { id } = useParams()
    const {data, error, isError, isLoading} = useActor(id)

    return (
        <Container>
            {isLoading && (<p>Loading actor...</p>)}

            {isError && (<p>An error occured {error.message}</p>)}

            {data && (
                <>
                    <h1>{data.name}</h1>
                    <Card className='mb-3'>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400${data.profile_path}`} />
                        <Card.Body>
                            <div>
                                <span>Born: {data.birthday} </span>
                            </div>
                            <div>
                                <p>{data.biography}</p>
                            </div>
                            <div>
                                <h3>Featerad in the following movies: </h3>
                            </div>
                        </Card.Body>
                    </Card> 
                </>
            )}
        </Container>
    )
}

export default ActorPage