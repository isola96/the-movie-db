import Container from 'react-bootstrap/Container'
import { useParams } from "react-router-dom"
import ActorDetails from '../components/ActorDetails'
import useActor from "../hooks/useActor"

const ActorPage = () => {
    const { id } = useParams()
    const {data, error, isError, isLoading} = useActor(id)

    return (
        <Container>
            {isLoading && (<p>Loading actor...</p>)}

            {isError && (<p>An error occured {error.message}</p>)}

            {data && (
                <ActorDetails data={data} />
            )}
        </Container>
    )
}

export default ActorPage