import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoadingScreen } from "./LoadingScreen";

export const Protected = ({ children }) => {
    const { isAuthChecked, user } = useAuth();
    if (!isAuthChecked) {
        return (
            <LoadingScreen
                message="Authenticating..."
                subMessage="Please wait"
            />
        )
    }

    if (!user) {
        return <Navigate to={'/login'} replace/>
    }
    return children
}
