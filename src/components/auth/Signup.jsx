import AuthNav from "../layout/AuthNav";
import { BsFillPersonFill, BsUnlockFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signin">
      <AuthNav />
      <div className="text-3xl font-bold my-3 text-center">
        Welcome to ShopHunter.io
      </div>
      <div className="relative max-w-sm mx-auto">
        <div className="absolute bg-blue-200 w-full h-full  rounded-lg border border-black left-4 top-4"></div>
        <form className="form border border-black bg-white w-full mt-8 rounded-lg p-10 relative z-10">
          <div className="text-gray-500 mb-4 text-center">
            Sign up using your email address
          </div>
          <div className="control">
            <input type="text" name="name" placeholder="Name" className="inp" />
            <BsFillPersonFill className="logs " />
          </div>
          <div className="control">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="inp"
            />
            <FiMail className=" logs " />
          </div>{" "}
          <div className="control">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inp"
            />
            <BsUnlockFill className="logs " />
          </div>
          <div className="control">
            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              className="inp"
            />
            <BsUnlockFill className="logs " />
          </div>
          <div className="control flex gap-4">
            <input type="checkbox" name="name" className="" checked="true" />
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
