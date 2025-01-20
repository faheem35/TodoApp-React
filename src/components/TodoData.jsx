import React from 'react'
import { removeTodoAPI, updateTodoAPI} from '../services/allAPI';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const TodoData = ({displayData, SetDeleteTodoResponseFromTodoData,SetUpdateTodoResponseFromTodoData}) => {

  const [editData,setEditData]=useState('')
 
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setEditData(displayData.enteredData)
    setShow(true);
  }

  const handleEdit=async()=>{
    console.log("updated todo:",editData);
    try{
      const result= await updateTodoAPI(displayData?.id, {enteredData:editData})
      SetUpdateTodoResponseFromTodoData(result)

      if (result.status >= 200 && result.status < 300) {
        alert("Todo updated successfully");
        
        setShow(false); // Close the modal
      } else {
        alert("Failed to update todo");
      }
     
      

    }catch(err){
      console.log(err);
      
    }
    
  }
  
  const deleteTodo=async(id)=>{
    try{
     const result=await removeTodoAPI(id)
     SetDeleteTodoResponseFromTodoData(result)
     alert("Todo deleted successfully")

    }catch(err){
      console.log(err);
      
    }

  }
  
  return (
   <>
     <div className='d-flex align-items-center justify-content-between  p-4 bg-secondary rounded mb-3'>  
     
       <h5 className='text-white'>{displayData.enteredData}</h5>
           <div className='d-flex justify-content-end'>
              <i onClick={handleShow} className="fa-solid fa-pen-to-square text-dark"></i>
              <i onClick={()=>deleteTodo(displayData?.id)} className="fa-solid text-black fa-trash  ms-3"></i>
              </div>
     
  
     </div>
  
  
  
  <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FloatingLabel  controlId="floatingPassword" label="Todo">
        <Form.Control value={editData}  onChange={e=>setEditData(e.target.value)}  type="text" placeholder="Todo" />
      </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
   </>

   
   
  )
}

export default TodoData