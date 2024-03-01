// App.tsx
/*
the page contains routes for all pages
*/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/PageIndex";


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
