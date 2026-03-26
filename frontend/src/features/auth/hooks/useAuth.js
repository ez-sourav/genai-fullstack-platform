import { useContext, useEffect,useRef, useState } from "react";
import { AuthContext } from "../auth.context";
import { register, login, logout, getMe } from "../services/auth.api";

export const useAuth = () => {
    const context = useContext(AuthContext);
    const [isAuthChecked, setIsAuthChecked] = useState(false)
    const { user, setUser, loading, setLoading } = context;
    const hasFetched = useRef(false);

   
    const handleLogin = async ({ email, password }) => {
        setLoading(true);
        try {
            const data = await login({ email, password });
            setUser(data.user);
            return { success: true }; 
        } catch (error) {
           return {
            success: false,
           message: error.message || "Login failed"
        };
        } finally {
            setLoading(false);
        }
    };

   
    const handleRegister = async ({ username, email, password }) => {
  setLoading(true);
  try {
    const data = await register({ username, email, password });
    setUser(data.user);

    return { success: true };   
  } catch (error) {
    return {
      success: false,
      message: error.message || "Register failed", 
    };
  } finally {
    setLoading(false);
  }
};

   
    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
           
        }

        setUser(null); 
    };

   useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const getAndSetUser = async () => {
        try {
            const data = await getMe();
            setUser(data.user);
        } catch (err) {
            if (err.response?.status === 401) {
                setUser(null); 
                return;
            }
        } finally {
            setLoading(false);
            setIsAuthChecked(true);
        }
    };

    getAndSetUser();
}, []);

    return {
        user,
        loading,
        isAuthChecked,
        handleRegister,
        handleLogin,
        handleLogout,
    };
};