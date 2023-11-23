
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import Login from './pages/Login';
import body from './pages/Body';
import Run from './pages/Run';
import Map from './pages/Map';
import Mapfunction from './pages/Mapfunction';
import RegistrationPage from './pages/RegistrationPage';





function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
          {/* <Route path='/Home' element={<Home/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Login' element={<Login/>}/>  */}
        
        {/* <Route path='/' element={<Registration/>}/> */}

        {/* <Route path='/body' element={<body/>}/>
        <Route path='/Run' element={<Run/>}/>  */}
        
        {/* <Route path='/' element={<Mapfunction/>}/> */}
        {/* <Route path='/' element={<Map/>}/> */}

        <Route path="/" element={<RegistrationPage/>}/>


       
    
      </Routes>
     </Router>
    </div>
  );
}

export default App;
