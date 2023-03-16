import {Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import RegistrationPage from './components/RegistrationPage'

import './App.css';

const App=()=>(
  <>
  
 <Routes>
 <Route exact path="/RegistrationPage" element ={<RegistrationPage/>} />
  <Route exact path="/" element ={<LoginForm/>} />
 </Routes>
  
    
  </>
  
  
  
  
 
 
)



export default App;
