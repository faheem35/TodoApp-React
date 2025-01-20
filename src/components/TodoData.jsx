import React from 'react'
import { removeTodoAPI } from '../services/allAPI';

const TodoData = ({displayData, SetDeleteTodoResponseFromTodoData}) => {
  
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
   <div className='p-3 bg-secondary rounded mb-3'>  
   <h5 className='text-white'>{displayData.enteredData}</h5>
       <div className='d-flex justify-content-end'>
          <i class="fa-solid fa-pen-to-square text-white"></i>
          <i onClick={()=>deleteTodo(displayData?.id)} class="fa-solid fa-trash text-white ms-2"></i>
          </div>

   </div>

   
   
  )
}

export default TodoData