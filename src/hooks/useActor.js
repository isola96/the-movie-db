import { useQuery } from 'react-query'
import { getActor } from '../services/TMDBAPI'

const useActor = (id) => {
	return useQuery(['actor', id], () => getActor(id))
}

export default useActor