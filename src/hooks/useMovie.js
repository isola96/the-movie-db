import { useQuery } from "react-query"
import { getMovie } from "../services/TMDBAPI"

const useMovie = (id) => {
    return useQuery(['movie', id], () => getMovie(id))
}

export default useMovie