// App.tsx
/*
the page contains routes for all pages
*/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Explore from './components/pages/Explore';
import Projects from './components/pages/Projects';


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
