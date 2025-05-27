import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function useCheckUserAuth(){
  const currentUser = useSelector((state) => state.auth.currentUser)

  currentUser !== null
  
}