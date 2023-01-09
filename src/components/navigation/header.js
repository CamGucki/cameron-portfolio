import Navigation from "./navbar";
import ProfileImg from "../../styles/images/profile-img1.png";

const Header = () => {
	return (
		<div className='header-sidebar'>
			<div className='header'>
				<img className ="profile-img" src={ProfileImg} alt=""></img>
				<span className="profile-name"> Cameron Bogucki</span>
				
				<Navigation />
			</div>
		</div>
	);
};
export default Header;
