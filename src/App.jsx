import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'

// Pages 
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import PopularPage from './pages/PopularPage'
import TopRatedPage from './pages/TopRatedPage'
import MoviePage from './pages/MoviePage'
import ActorPage from './pages/ActorPage'
import GenresPage from './pages/GenresPage'
import GenrePage from './pages/GenrePage'

//Styling
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now_playing" element={<NowPlayingPage />} />
				<Route path="/popular" element={<PopularPage />} />
				<Route path="/top_rated" element={<TopRatedPage />} />
				<Route path="/genres" element={<GenresPage />} />
				<Route path="/genres/:id" element={<GenrePage />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/actor/:id" element={<ActorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
