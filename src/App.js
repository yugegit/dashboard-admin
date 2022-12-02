
import './App.css';
import DashBoard from './Component/DashBoard';
import SideBar from './Component/SideBar';
import AllStudent from './Component/AllStudent';
import AddStudent from './Component/AddStudent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import EditStudent from './Component/EditStudent';


function App() {
  

  let data = {
    earning: "40,000",
    annual: "2,40,000",
    task: "20",
    pending: "26"

  }

  let [students,setStudents] = useState([])

  

  return <>
  <Router>
    <div style={{display: "grid",gridTemplateColumns:"20% 85%"}}>
      <div>
        <SideBar/>
      </div>
     <div>
       <Routes>
          <Route path='*' element={  <DashBoard data={data}/>} />

          <Route path='/dashboard' element={  <DashBoard data={data}/>} />
          <Route path='/all-student' element={<AllStudent data = {{students}}/>}/>
          <Route path='/add-student' element={<AddStudent data = {{students,setStudents}}/>}/>
          <Route path='/edit-student/:id' element={<EditStudent data = {{students,setStudents}}/>}/>
          


        </Routes>
      </div>
    </div>
 </Router>
 
  </>
  
}

export default App;
