import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';


function AddStudent(props) {

  let [name,setName] = useState("")
  let [batch,setBatch] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [status,setStatus] = useState(true)
  let navigate = useNavigate()

  let handleSubmit = () => {
    let data = {
      name,
      batch,
      email,
      mobile,
      status
    }
    console.log(data)
    props.data.setStudents([...props.data.students,data])
    navigate('/all-student')
  }





  return   <>

<Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch Name" onChange={(e)=>setBatch(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile.No</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile.No" onChange={(e)=>setMobile(e.target.value)} />
        
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

  </>
}

export default AddStudent