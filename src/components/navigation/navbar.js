import { NavLink } from "react-router-dom"

 const Navigation = () => {
        return (
            <div className='navbar'>
                <NavLink exact to ='/'>
                    Home
                </NavLink>
                <NavLink to ='/about'>
                    About
                </NavLink>
                <NavLink to ='/contact'>
                    Contact
                </NavLink>
                <NavLink to ='/projects'>
                    Projects
                </NavLink>
                
                
            </div>
        );
    }

export default Navigation