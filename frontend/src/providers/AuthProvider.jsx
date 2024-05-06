import { useState, useEffect, createContext, useContext } from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    //   get user from local storage if it exists
    const user = JSON.parse(localStorage.getItem("user")) || null;
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/login");
  };

  const contextValues = { currentUser, setCurrentUser, logout };

  return (
    <AuthContext.Provider value={contextValues}>
      <>
        {children}
        <ToastContainer />
      </>
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
