import React, { useEffect, useState } from 'react'
import TodoData from './TodoData'
import { getAllTodoAPI } from '../services/allAPI'

const View = ({addResponseFromHome}) => {

  const [deleteTodoResponseFromTodoData,SetDeleteTodoResponseFromTodoData]=useState("")

  const [allTodos, setAllTodos] = useState('')

  useEffect(() => {
    getAllTodos()
  }, [addResponseFromHome,deleteTodoResponseFromTodoData])

  const getAllTodos = async () => {
    try {
      const result = await getAllTodoAPI()
      console.log(result);

      if (result.status >= 200 && result.status < 300) {
        setAllTodos(result.data)

      } else {
        console.log("API call failed...");

      }


    } catch (err) {
      console.log(err);

    }

  }

  return (
    <>
      {
        allTodos?.length >0?
   allTodos.map(todo=>(

      <TodoData displayData={todo} SetDeleteTodoResponseFromTodoData={SetDeleteTodoResponseFromTodoData} />
      )):
      <div>No Todos Added yet!</div>
  
  
  }


    </>


  )
}

export default View