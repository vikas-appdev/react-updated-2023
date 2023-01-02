import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './components/ClassBasedComponent';
import FunctionalBasedComponent from './components/FunctionalBasedComponent';
import { FunctionalArrowComponent } from './components/FunctionalArrowComponent';

function App() {
  return (
    <div className="App">
      <ClassBasedComponent />
      <FunctionalBasedComponent />
      <FunctionalArrowComponent />
    </div>
  );
}

export default App;
