
import './App.css';
import Player from './Players';
import Footer from './component/footer';
import footer from './component/footer';
import Navigation from './component/navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
