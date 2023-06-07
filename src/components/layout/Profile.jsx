import Navbar from "./Navbar";
import Footer from "./Footer";
import UnderNav from "./UnderNav";
import { BiCreditCard } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <UnderNav text={"Setings"} />
      <div className="main p-4 mx-6 transform -translate-y-10 bg-white rounded-md ">
        <div className="lg:grid grid-cols-settings gap-4 divide-x-0 divide-y-2 lg:divide-x-2 lg:divide-y-0">
          <div className="left_part text-sm">
            <div className="flex gap-2 p-2 bg-green-600/20 items-center text-green-700 border-l-4 border-green-700">
              <BsPersonBadge /> Personal Details
            </div>
            <div className="flex gap-2 p-2 items-center cursor-pointer">
              <AiOutlineAppstoreAdd /> Affiliate Program
            </div>
            <div className="flex gap-2 p-2 items-center cursor-pointer">
              <BiCreditCard /> Billing
            </div>
          </div>
          <div className="right_part p-4 mt-4">
            <div className="font-bold uppercase text-slate-800">
              contact information
            </div>
            <form
              action=""
              className="lg:grid  grid-cols-2 lg:w-4/5 w-full gap-4"
            >
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  First Name
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Last Name
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control col-span-2">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Address
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  City
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Country
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Zip Code
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <button className="bg-blue-800 py-2 max-w-xs w-full text-white font-semibold rounded-md hover:bg-blue-900 col-span-2">
                Submit
              </button>
            </form>
            <div className="font-bold uppercase text-slate-800 mt-4">
              Update Password
            </div>
            <form action="" className="w-full lg:w-3/5 ">
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Current password
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  New Password
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Confirm Password
                </label>
                <input type="text" className="prof_inp" />
              </div>
              <button className="bg-blue-800 py-2 max-w-xs w-full text-white font-semibold rounded-md hover:bg-blue-900 col-span-2">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
