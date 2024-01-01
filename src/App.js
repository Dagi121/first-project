
import './App.css';
import Football from './Tutorials/events';
import Hello from './Tutorials/function_components';
import Welcome from './Tutorials/jsx';
import { Fullname } from './props';


function App() {
  return (
    <div className="App">
      <Hello />
      <Welcome />
      <Fullname />
      <Football />
    </div>
  );
}

export default App;
