import { useContext, useState } from "react";
import AuthNav from "../layout/AuthNav";
import { BsFillPersonFill, BsUnlockFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AlertContext from "../../Context/AlertContext/AlertContext";
import AuthContext from "../../Context/AuthContext/AuthContext";
import Alert from "../layout/Alert";

const instance = axios.create({ baseURL: process.env.REACT_APP_BACK_URI });
const SignUp = () => {
  const alertCon = useContext(AlertContext);
  const authCon = useContext(AuthContext);
  const { addAlert } = alertCon;
  const { authSuccess, authError } = authCon;
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const change = (e) =>
    setDetails({ ...details, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    if (details.password !== details.confirm) {
      addAlert("Passwords Dont Match");
      return;
    }

    try {
      const res = await instance.post("/register", details);
      authSuccess(res);
      navigate("/");
    } catch (error) {
      addAlert(error.response.data.error);
      authError();
    }
  };

  return (
    <div className="signin">
      <AuthNav />
      <div className="text-3xl font-bold my-3 text-center">
        Welcome to ShopHunter.io
      </div>
      <Alert />
      <div className="relative max-w-sm mx-auto">
        <div className="absolute bg-blue-200 w-full h-full  rounded-lg border border-black left-4 top-4"></div>
        <form
          className="form border border-black bg-white w-full mt-8 rounded-lg p-10 relative z-10"
          onSubmit={submitForm}
        >
          <div className="text-gray-500 mb-4 text-center">
            Sign up using your email address
          </div>
          <div className="control">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="inp"
              onChange={change}
              required
            />
            <BsFillPersonFill className="logs " />
          </div>
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
          <div className="control">
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
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
            <div className="sub">Subscribe to the Shophunter.io Newsletter</div>
          </div>
          <div className="control flex gap-4">
            <input type="checkbox" name="name" className="" />
            <div className="sub">
              I agree to the{" "}
              <span className="text-blue-500">Terms of Service</span> and{" "}
              <span className="text-blue-500">Privacy Policy.</span>
            </div>
          </div>
          <button className="bg-blue-500 text-white w-full py-2">
            Register
          </button>
        </form>
      </div>
      <div className="back max-w-sm flex justify-between mx-auto mb-2 mt-6">
        <button>
          <Link to="/signin">Back to login</Link>
        </button>
        <button>Forgot Password</button>
      </div>
      <div className="text-center my-10">
        Please note: email addresses are immediately processed once entered.
      </div>
      <div className="flex justify-center gap-4 pb-8">
        <div> ©2022 Backslash, Inc.</div>
        <div>Terms </div>
        <div>Privacy </div>
        <div> Contact</div>
      </div>
    </div>
  );
};

export default SignUp;
