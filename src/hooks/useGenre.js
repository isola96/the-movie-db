import { useQuery } from 'react-query'
import { getGenre } from '../services/TMDBAPI'

const useGenre = (id, page) => {
	return useQuery(['genre', id, page], () => getGenre(id, page))
}

export default useGenre

