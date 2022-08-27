import ProjectForm from "./components/ProjectForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { DevProvider } from "./context/index";
import DeveloperDetails from "./components/DeveloperDetails";
function App() {
	return (
		<BrowserRouter>
			<DevProvider>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/add-proj" element={<ProjectForm />} />
					<Route path="/:id" element={<DeveloperDetails />} />
				</Routes>
			</DevProvider>
		</BrowserRouter>
	);
}

export default App;
