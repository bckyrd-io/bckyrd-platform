// App.tsx
/*
the page contains routes for all pages
*/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";
// import PageExplore from './components/PageExplore';


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PageHome />} />
					{/* <Route path="/explore" element={<PageExplore />} /> */}
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
