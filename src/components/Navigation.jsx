import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">The Movie DB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/now_playing">Now Playing</Nav.Link>
						<Nav.Link as={NavLink} end to="/popular">Popular</Nav.Link>
						<Nav.Link as={NavLink} end to="/top_rated">Top Rated</Nav.Link>
						<Nav.Link as={NavLink} end to="/genres">Genres</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
