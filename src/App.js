import {useState} from "react"
import { Route, Routes } from "react-router-dom";
import AboutToys from "./AboutToys";
import AllToys from './AllToys';
import './App.css';
import { data } from "./data"

function App() {

  const[toys, setToys] = useState(data)
  const[kidsToys, setKidsToys] = useState(0)

  return (
    <div className="">
        <h1 className="header">Welcome to our KIDS Toys shop!!</h1>

      {/* <AllToys/> */}
     <Routes>
         <Route exact path="/" element={<AllToys toys={toys} setToys={setToys}/>}></Route>
         <Route exact path="/AboutToys" element={<AboutToys kidsToys={kidsToys} setKidsToys={setKidsToys}/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
