import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useNavigate, useParams } from 'react-router-dom';


function EditStudent(props) {

    let params = useParams("")

  let [name,setName] = useState(props.data.students[params.id].name)
  let [batch,setBatch] = useState(props.data.students[params.id].batch)
  let [email,setEmail] = useState(props.data.students[params.id].email)
  let [mobile,setMobile] = useState(props.data.students[params.id].mobile)
  let [status,setStatus] = useState(props.data.students[params.id].status)
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
    props.data.students.splice(params.id,1,data)
    navigate('/all-student')
  }





  return   <>

<Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value = {name} onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch Name" value = {batch} onChange={(e)=>setBatch(e.target.value)} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value = {email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Mobile.No</Form.Label>
        <Form.Control type="number" placeholder="Enter Mobile.No" value = {mobile} onChange={(e)=>setMobile(e.target.value)} />
        
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>

  </>
}

export default EditStudent