import Folder from './components/Folder';
import JSON from "./db.json"

function App() {
  return (
    <div className="App">
      <Folder json={JSON} />
    </div>
  );
}

export default App;
