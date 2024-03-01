// App.tsx
/*
the page contains routes for all pages
*/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/PageIndex";
import PageHome from "./components/PageHome";
import Profile from './components/PageProfile';


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/Home" element={<PageHome />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
