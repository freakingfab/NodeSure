import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
