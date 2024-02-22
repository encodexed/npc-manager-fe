import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
	return (
		<>
			{/* <ContextProvider> */}
			<BrowserRouter>
				{/* <NavBar /> */}
				<Routes>
					{/* <Route path='*' element={<NotFoundPage />} /> */}
					<Route path='/' element={<LandingPage />} />
					{/* <Route path='/about' element={<AboutPage />} /> */}
					{/* <Route path='/' element={<ProjectsPage />} /> */}
					{/* <Route path='/projects/:id' element={<ProjectPageLoader />} /> */}
					{/* <Route path='/contact' element={<ContactPage />} /> */}
				</Routes>
			</BrowserRouter>
			{/* </ContextProvider> */}
		</>
	);
}

export default App;
