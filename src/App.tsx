// App.tsx
/*
the page contains routes for all pages
*/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";
import PageAdd from "./components/PageAdd";


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/add" element={<PageAdd />} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
