import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
// componenets
import Navbar from "./components/Navbar";

function App() {
	const { user } = useAuthContext();

	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						></Route>
						<Route
							path="/signup"
							element={!user ? <Signup /> : <Navigate to="/" />}
						></Route>
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						></Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;