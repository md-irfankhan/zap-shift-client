import './App.css'
import {Outlet} from "react-router";
import Navbar from './components/Navbar/Navbar';
function App() {


  return (
    <>
    <Navbar></Navbar>
      
    <Outlet/>

    


    </>
  )
}

export default App
