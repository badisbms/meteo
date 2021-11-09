import './styles/App.css';
import Header from './components/Header';
import MeteoCard from './components/MeteoCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MeteoCard />
   
    </div>
  );
}

export default App;
