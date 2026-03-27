import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoadingScreen } from "./LoadingScreen";

export const Protected = ({ children }) => {
    const { isAuthChecked, user } = useAuth();
    
    // Show loading while authentication is being checked
    if (!isAuthChecked) {
        return (
            <LoadingScreen
                message="Authenticating..."
                subMessage="Please wait"
            />
        )
    }

    // If not authenticated, redirect to welcome page
    if (!user) {
        return <Navigate to={'/welcome'} replace/>
    }
    
    // If authenticated, render children
    return children
}
