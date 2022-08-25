import { useQuery } from 'react-query'
import { getGenre } from '../services/TMDBAPI'

const useGenre = (id) => {
	return useQuery(['genre', id], () => getGenre(id))
}

export default useGenre