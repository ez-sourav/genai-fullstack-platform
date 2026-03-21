import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export const PublicRoute = ({ children }) => {
    const {user,loading} = useAuth()
    if(loading){
       return <main><h1>loading...</h1></main>
    }
    if(user){
        return <Navigate to={'/'} replace />
    }
  return children
}
