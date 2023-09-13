// App.tsx
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from './components/pages/Blog';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Explore from './components/pages/explore';
import Projects from './components/pages/projects';
import Places from './components/pages/places';
import Resources from './components/pages/resources';
import Markets from './components/pages/markets';


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/login" element={<Login/>} />
					<Route path="/signup" element={<SignUp/>} />
					<Route path="/explore" element={<Explore/>} />
					<Route path="/projects" element={<Projects/>} />
					<Route path="/places" element={<Places/>} />
					<Route path="/resources" element={<Resources/>} />
					<Route path="/markets" element={<Markets/>} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
