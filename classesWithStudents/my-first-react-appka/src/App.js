import "./App.css";
import Navbar from "./components/shared/navbar/Navbar";
import Main from "./components/bigPages/main/Main";
import HelloWorld from "./students/Nazar/Components/Hello-W";

function App() {
	return (
		<>
			<HelloWorld />
			<Navbar />
			<Main />
		</>
	);
}

export default App;
