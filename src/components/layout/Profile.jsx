import Navbar from "./Navbar";
import Footer from "./Footer";
import UnderNav from "./UnderNav";
import { BiCreditCard } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";
import axios from "axios";
import { useContext, useState } from "react";
import AlertContext from "../../Context/AlertContext/AlertContext";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URI,
  headers: {
    common: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  },
});

const Profile = () => {
  const alertCon = useContext(AlertContext);
  const { addAlert } = alertCon;

  // PASSWORD CHANGE
  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
    confirm: "",
  });

  const changing = (e) =>
    setPasswords({ ...passwords, [e.target.name]: e.target.value });

  const changePassword = async (e) => {
    e.preventDefault();

    if (
      passwords.new_password.trim() === "" ||
      passwords.confirm.trim() === ""
    ) {
      addAlert("New Password cannot be empty");
    }

    try {
      const res = await instance.put("/password/change", passwords, {
        headers: {
          common: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      });
      addAlert("positive", res.data);
    } catch (error) {
      addAlert("negative", error.response.data.error);
    }
  };

  // PROFILE EDIT
  const [profiles, setProfiles] = useState({
    first_name: "",
    last_name: "",
    zip_code: "",
    country: "",
    address: "",
    city: "",
  });

  const changer = (e) =>
    setProfiles({ ...profiles, [e.target.name]: e.target.value });

  const updateInformation = async (e) => {
    e.preventDefault();

    try {
      const res = await instance.put("/profile", profiles, {
        headers: {
          common: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      });
      addAlert("positive", res.data);
    } catch (error) {
      addAlert("negative", error.response.data.error);
    }
  };

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
            {/* UPDATE INFORMATION */}
            <div className="font-bold uppercase text-slate-800">
              contact information
            </div>
            <form
              action=""
              className="lg:grid  grid-cols-2 lg:w-4/5 w-full gap-4"
              onSubmit={updateInformation}
            >
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  First Name
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  name="first_name"
                  onChange={changer}
                  required
                />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Last Name
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  name="last_name"
                  onChange={changer}
                  required
                />
              </div>
              <div className="control col-span-2">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Address
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  name="address"
                  onChange={changer}
                  required
                />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  City
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  name="city"
                  onChange={changer}
                  required
                />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Country
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  name="country"
                  onChange={changer}
                  required
                />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Zip Code
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  name="zip_code"
                  onChange={changer}
                  required
                />
              </div>
              <button className="bg-blue-800 py-2 max-w-xs w-full text-white font-semibold rounded-md hover:bg-blue-900 col-span-2">
                Submit
              </button>
            </form>

            {/* CHANGE PASSWORD */}
            <div className="font-bold uppercase text-slate-800 mt-4">
              Update Password
            </div>
            <form className="w-full lg:w-3/5" onSubmit={changePassword}>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Current password
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  onChange={changing}
                  name="old_password"
                  required
                />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  New Password
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  onChange={changing}
                  name="new_password"
                  required
                />
              </div>
              <div className="control">
                <label className="text-slate-600 font-semibold" htmlFor="">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="prof_inp"
                  onChange={changing}
                  name="confirm"
                  required
                />
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
