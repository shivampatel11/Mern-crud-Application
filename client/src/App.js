import react from 'react' ;
import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Adduser from '../../crud/src/component/adduser/Adduser';
import Alluser from '../../crud/src/component/alluser/alluser';
import Crudapp from '../../crud/src/component/crudapp/crudapp';
import Edituser from './component/edituser/edit.js'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Crudapp />}></Route>
        <Route path="/adduser" element ={<Adduser/>}></Route>
        <Route path ="/alluser" element={<Alluser/>}></Route>\
        <Route path = '/edit/:id' element={<Edituser/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

