import "./App.css";
import SearchBar from "./Components/SearchBar";
import Data from "./Data.json";

function App() {
	return (
		<div className="App">
			<SearchBar placeholder="What do you need?" data={Data} />
		</div>
	);
}

export default App;
