import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { saveTodoAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {
  const [todoData, setTodoData]=useState('')
          const [show, setShow] = useState(false);

          const handleClose = () => setShow(false);
          const handleShow = () => setShow(true);
 
          //uploading Todo
          const handleSave = async () => {
            if (todoData) {
              const newTodo = { enteredData: todoData }; 
              try {
                const result = await saveTodoAPI(newTodo);
                console.log(result);

                if(result.status>=200 && result.status<300)
                {
                  alert("Todo Added successfully")
                  handleClose()
                  //for realtime reflection in view component
                  setAddResponseFromHome(result)
                }else{
                  alert("something wrong in uploading...")
                }
              } catch (err) {
                console.log(err);
              }
            } else {
              alert("Please enter a todo");
            }
          };
          
      
          
          
  return (
    <>
        <Button variant="primary" size='lg' className='rounded-circle' onClick={handleShow}><i class="fa-solid fa-plus"></i></Button>

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nwe To-Do</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingTodo" label="New to do">
        <Form.Control onChange={e=>setTodoData(e.target.value)} type="text" placeholder="New to-do" />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
          <i class="fa-solid fa-circle-xmark fs-5"></i>
          </Button>
          <Button variant="success" onClick={handleSave} >
          <i class="fa-solid fa-check"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  )
}

export default Add