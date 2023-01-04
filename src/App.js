import { Route, Routes } from "react-router-dom";

import Header from "./components/navigation/header";
import Navigation from "./components/navigation/navbar";
import PortfolioContainer from "./components/portfolio/portfolio-container";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";

const App = () => {
	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<Routes>
				<Route exact path='/' element={(<Home/>)} />
				<Route path='/about' element={(<About/>)} />
				<Route path='/projects' element={(<Projects/>)} />
				<Route path='/contact' element={(<Contact/>)} />
			</Routes>
		</div>
	);
};

export default App;
