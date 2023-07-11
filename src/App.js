
import './App.css';
import logo from './logo.svg';
import Navigation from './components/Navigation';
import Players from './Players';
import Main from './components/Main';
import Footer  from './components/Footer';
import Detail from './components/Detail';
import About from './components/About';
import Contact from './components/Contact';

//import PlayersPresentation from './components/PlayersPresentetion';
import{Routes,Route} from 'react-router-dom';
function App(){
  return(
    <div>
      <Navigation />
      <Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>

  );
}

export default App;



