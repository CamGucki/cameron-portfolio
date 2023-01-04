import { NavLink } from "react-router-dom";
import {
	FaHome,
	FaPortrait,
	FaProjectDiagram,
	FaMailBulk,
} from "react-icons/fa";
const Navigation = () => {
	return (
		<div className='navbar'>

			<NavLink exact to='/'>
				<FaHome />
				Home
			</NavLink>

			<NavLink to='/about'>
				<FaPortrait />
				About
			</NavLink>

			<NavLink to='/projects'>
				<FaProjectDiagram />
				Projects
			</NavLink>

			<NavLink to='/contact'>
				<FaMailBulk />
				Contact
			</NavLink>
		</div>
	);
};

export default Navigation;
