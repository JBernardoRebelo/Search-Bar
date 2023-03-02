import "./App.css";
import Data from "./Data.json";
import SearchBar from "./Components/SearchBar";

function App() {
	return (
		<div className="App">
			<SearchBar placeholder="What do you need?" data={Data} />
		</div>
	);
}

export default App;
