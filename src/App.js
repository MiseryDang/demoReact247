import './App.css';
import Navigation from './component/Navigation';
import Players from './component/Players';
import Detail from './component/Detail';
import Footer from './Footer';
import {
    Routes,
    Route,
  } from "react-router-dom";
  
function App(){
    return(
<div >
<Navigation/>
<Routes>
          <Route path='/' element={<Players/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        {/* <Route path='/contact' element={<Contact/>}></Route> */}
      </Routes>
      <Footer/>
    </div>




    );
}
export default App;