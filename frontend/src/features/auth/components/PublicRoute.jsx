import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { LoadingScreen } from "./LoadingScreen"

export const PublicRoute = ({ children }) => {
    const {user,isAuthChecked } = useAuth()
    if(!isAuthChecked ){
       return <LoadingScreen message="Checking authentication..." subMessage="Please wait" />
    }
    if(user){
        return <Navigate to={'/'} replace />
    }
  return children
}
