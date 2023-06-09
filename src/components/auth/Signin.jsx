import { useContext, useState } from "react";
import AuthNav from "../layout/AuthNav";
import { BsUnlockFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../Context/AlertContext/AlertContext";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Alert from "../layout/Alert";

const instance = axios.create({ baseURL: process.env.REACT_APP_BACK_URI });
const SignIn = () => {
  const alertCon = useContext(AlertContext);
  const authCon = useContext(AuthContext);
  const { addAlert } = alertCon;
  const { authSuccess, authError } = authCon;

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const change = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await instance.post("/login", details);
      console.log("going", res);
      authSuccess(res);
      navigate("/");
    } catch (error) {
      addAlert("negative", error.response.data.error.message);
      authError(error);
    }
  };
  return (
    <div className="signin">
      <AuthNav />
      <div className="relative max-w-sm mx-auto">
        <div className="absolute bg-blue-200 w-full h-full  rounded-lg border border-black left-4 top-4 backe"></div>
        <form
          className="form border border-black bg-white w-full mt-8 rounded-lg p-10 relative z-10"
          onSubmit={submitForm}
        >
          <div className="text-gray-500 mb-4 text-center">
            Sign up using your email address
          </div>
          <Alert />
          <div className="control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inp"
              onChange={change}
              required
            />
            <FiMail className=" logs " />
          </div>
          <div className="control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inp"
              onChange={change}
              required
            />
            <BsUnlockFill className="logs " />
          </div>
          <div className="control flex gap-4">
            <input
              type="checkbox"
              name="name"
              className=""
              defaultChecked="true"
            />
            <div className="sub">Remember Me</div>
          </div>
          <button className="bg-blue-500 text-white w-full py-2">Log In</button>
        </form>
      </div>
      <div className="back max-w-sm flex justify-between mx-auto mb-2 mt-6">
        <button>Forgot Password</button>
        <button>
          <Link to={"/signup"}>Create New Account</Link>
        </button>
      </div>
      <div className="flex justify-center gap-4 mb-8 mt-10">
        <div> ©2022 Backslash, Inc.</div>
        <div>Terms </div>
        <div>Privacy </div>
        <div> Contact</div>
      </div>
    </div>
  );
};

export default SignIn;
