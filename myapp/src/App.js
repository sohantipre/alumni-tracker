import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Collegescreen from "./screens/Collegescreen";
import AlumniProfilescreen from "./screens/alumniprofilescreen";
import StudentProfilescreen from "./screens/studentprofilescreen";
import CollegeProfilescreen from "./screens/Collegeprofilescreen";
import Alumniscreen from "./screens/Alumniscreen";
import Studentscreen from "./screens/Studentscreen";
import Alleventscreen from "./screens/Alleventscreen";
import Followedscreen from "./screens/alfollowedbystscreen";
import Followedscreen2 from "./screens/stfollowedbyalscreen";
import Navbar from "./components/navbar";
import Allstudents from "./screens/allstudentsscreen";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route path='/' component={Loginscreen} exact></Route>
        <Route path='/register' component={Registerscreen}></Route>

        <Route path='/collegescreen' component={Collegescreen}></Route>
        <Route path='/alumniscreen' component={Alumniscreen}></Route>
        <Route path='/studentscreen' component={Studentscreen}></Route>
        <Navbar></Navbar>
        <Route
          path='/alumniprofile/:id'
          component={AlumniProfilescreen}
        ></Route>
        <Route
          path='/studentprofile/:id'
          component={StudentProfilescreen}
        ></Route>
        <Route
          path='/collegeprofile/:id'
          component={CollegeProfilescreen}
        ></Route>
        <Route path='/allevents/:id' component={Alleventscreen}></Route>
        <Route path='/followed/:id' component={Followedscreen}></Route>
        <Route path='/followed2/:id' component={Followedscreen2}></Route>
        <Route path='/allstudents/:id' component={Allstudents}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
