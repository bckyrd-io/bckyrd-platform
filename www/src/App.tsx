// App.tsx
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Blog from './components/pages/Blog';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/login" element={<Login/>} />
					<Route path="/signup" element={<SignUp/>} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
