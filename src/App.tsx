// App.tsx
/*
the page contains routes for all pages
*/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageHome from "./components/PageHome";
import AddWorkSpace from "./components/PageAdd";
import MarketPlace from "./components/PageMarketPlace";
import WorkSpace from "./components/PageWorkSpace";
import Challenge from "./components/PageChallenge";
import ChallengeView from './components/PageChallengeView';
import WorkSpaceView from './components/PageWorkSpaceView';


function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PageHome />} />
					<Route path="/marketPlace" element={<MarketPlace/>} />
					<Route path="/workSpace" element={<WorkSpace/>} />
					<Route path="/workSpaceView" element={<WorkSpaceView/>} />
					<Route path="/challenge" element={<Challenge/>} />
					<Route path="/challengeView" element={<ChallengeView/>} />
					<Route path="/addWorkSpace" element={<AddWorkSpace />} />
				</Routes>
			</BrowserRouter>
		</>
	)

}


export default App
