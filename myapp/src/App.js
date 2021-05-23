import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Collegescreen from "./screens/Collegescreen";
import Profilescreen from "./screens/profilescreen";
import Alumniscreen from "./screens/Alumniscreen";
import Studentscreen from "./screens/Studentscreen";
import Alleventscreen from "./screens/Alleventscreen";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' component={Loginscreen} exact></Route>
        <Route path='/register' component={Registerscreen}></Route>
        <Route path='/collegescreen' component={Collegescreen}></Route>
        <Route path='/alumniscreen' component={Alumniscreen}></Route>
        <Route path='/studentscreen' component={Studentscreen}></Route>
        <Route path='/profile/:id' component={Profilescreen}></Route>
        <Route path='/allevents/:id' component={Alleventscreen}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
