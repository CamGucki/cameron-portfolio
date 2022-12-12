import { Route, Routes} from "react-router-dom";

import Header from "./components/navigation/header";
import Navigation from "./components/navigation/navbar"
import PortfolioContainer from "./components/portfolio/portfolio-container";
import Home from "./components/pages/home"
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

const App = () => {
	return (
		<div className='App'>
			<Header/>
			<Routes>
				<Route exact path='/'component = {Home}/>
				<Route path='/about'component = {About}/>
				<Route path='/projects'component = {Projects}/>
				<Route path='/contact'component = {Contact}/>
					
			</Routes>

		</div>
	);
}

export default App;
