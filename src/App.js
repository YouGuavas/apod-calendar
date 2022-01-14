import './App.css';
import Apod from './Apod';

function App() {
  const api_key = "s7fxeLmO8ZrYphtEnTS64T2miOORpZ7AI5fJZdBD"
  return (
    <div className="App">
      <Apod api_key={api_key} />
    </div>
  );
}

export default App;
