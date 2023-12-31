
import './App.css';
import Hello from './Tutorials/function_components';
import Welcome from './Tutorials/jsx';
import { Fullname } from './props';


function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <Fullname />
    </div>
  );
}

export default App;
