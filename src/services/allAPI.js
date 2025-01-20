import commonAPI from "./commonAPI";
import serverUrl from "./serverUrl";

//saveTodoAPI- post http req, Add component

export const saveTodoAPI=async (todoData)=>{
       return  await commonAPI(`POST`,`${serverUrl}/uploadingTodos`,todoData)

}

//getAllTodoAPI- get req, view component 
export const getAllTodoAPI=async()=>{
          return await commonAPI(`GET`,`${serverUrl}/uploadingTodos`,"")
}

//removeTodoAPI- get req, view component 
export const removeTodoAPI=async(id)=>{
          return await commonAPI(`DELETE`,`${serverUrl}/uploadingTodos/${id}`,{})
}