import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import setAuthToken from "../../utils/SetAuthToken";
import { AUTH_FAILED, LOGOUT, USER_LOADED, LOGIN_SUCCESS } from "../type";
import axios from "axios";

const instance = axios.create({ baseURL: process.env.BACK_URI });
const AuthState = (prop) => {
  const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    complains: [],
    complain: {},
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const loadUser = async () => {
    if (state.token) {
      setAuthToken(localStorage.getItem("token"));
    }

    try {
      const res = await instance.get("/user");

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_FAILED });
    }
  };

  // REGISTER/LOGIN FAILED
  const authError = (error) =>
    dispatch({ type: AUTH_FAILED, payload: error.response.data.message });

  // LOGIN SUCCESS / TOKEN GENERATED
  const authSuccess = (res) => {
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    // loadUser();
  };

  const logOutUser = () => {
    dispatch({ type: LOGOUT });
  };

  const values = {
    token: state.token,
    user: state.user,
    complains: state.complains,
    complain: state.complain,
    isAuthenticated: state.isAuthenticated,
    authSuccess,
    authError,
    loadUser,
    logOutUser,
  };

  return (
    <AuthContext.Provider value={values}>{prop.children}</AuthContext.Provider>
  );
};

export default AuthState;
