import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NowPlayingPage from './pages/NowPlayingPage'
import './assets/scss/App.scss'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now_playing" element={<NowPlayingPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
