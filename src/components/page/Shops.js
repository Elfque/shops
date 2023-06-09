import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import UnderNav from "../layout/UnderNav";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineRise } from "react-icons/ai";
import { BsFillGrid1X2Fill, BsCardList } from "react-icons/bs";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URI,
  headers: {
    common: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  },
});

const Shops = () => {
  const durat = ["Day", "Week", "Month"];
  const ranges = ["Revenue", "Velocity"];
  const [duration, setDuration] = useState(durat[0]);
  const [showDrop, setShowDrop] = useState(false);
  const [range, setRange] = useState(ranges[0]);
  const [shops, setShops] = useState({});

  const changeRange = (i) => {
    setShowDrop(false);
    setRange(ranges[i]);
  };

  const pics = [
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
    {
      summary: "lorem ipsum",
      img: "/img/newlogo.jpg",
    },
  ];

  useEffect(() => {
    instance
      .get("/shops", {
        headers: {
          common: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      })
      .then((data) => setShops(data));
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <UnderNav text="My Shops" />
      <div className="main p-4 mx-6 transform -translate-y-10 bg-white rounded-md">
        <div className="flex justify-between flex-col lg:flex-row gap-3 items-center">
          <div className="flex gap-4 items-center">
            <div className="">Filter by tag:</div>
            <select
              name=""
              id=""
              defaultValue="none"
              className="border-2 border-gray-300 rounded-lg py-1 px-4 w-40"
            >
              <option value="none">None</option>
            </select>
          </div>
          <div className="flex items-center gap-6">
            <div className="tracked hidden sm:inline">1 / 5 tracked</div>
            <div className="border-2 border-gray-300 rounded-lg grid grid-cols-3 w-80 text-center mx-auto divide-x-2">
              {durat.map((dur, idx) => (
                <div
                  className="text-gray-700 w-full py-1"
                  key={idx}
                  onClick={() => setDuration(dur)}
                >
                  {dur}
                </div>
              ))}
            </div>
          </div>
          <div className="btns flex gap-2">
            <button className="w-36 rounded-md py-2 bg-gray-700 hover:bg-gray-800 text-white ">
              Remove Shops
            </button>
            <button className="w-36 rounded-md py-2 text-white  bg-blue-700 hover:bg-blue-800">
              <Link to="/addshop">Add Shops</Link>
            </button>
          </div>
        </div>
        <div className="sec flex justify-between mt-2 mb-4 flex-col items-center gap-2 lg:flex-row">
          <div className="sel_part relative">
            <div
              className="top flex gap-6 items-center border border-gray-300 rounded-md py-1 px-2"
              onClick={() => setShowDrop(!showDrop)}
            >
              <AiOutlineRise /> Revenue <TbSquareRoundedArrowDownFilled />
            </div>
            <div
              className={`down bg-white text-center shadow-lg rounded-lg absolute top-full left-0 w-full border border-gray-400 ${
                showDrop ? "block" : "hidden"
              }`}
            >
              <div className="py-1">Sort By</div>
              {ranges.map((ran, idx) => (
                <div
                  key={idx}
                  className="py-1"
                  onClick={() => changeRange(idx)}
                >
                  {ran}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <div className="">Display as:</div>
            <div className="border border-gray-300 w-8 h-8 flex justify-center items-center cursor-pointer list">
              <BsCardList />
            </div>
            <div className="border border-gray-300 w-8 h-8 flex justify-center items-center cursor-pointer gridd">
              <BsFillGrid1X2Fill />
            </div>
          </div>
        </div>
        <div className="border border-gray-30 p-4 max-w-sm mx-auto">
          <div className="top text-sm flex gap-2 items-center border-b-2 pb-2 border-gray-400/40">
            <div className="p-2 border border-gray-300 rounded-md">
              <img src="/img/newlogo.jpg" />
            </div>
            <div className="text-black">
              Poly & Bark | The Internet's Favorite Sofas
            </div>
          </div>
          <div className="grid grid-cols-2 text-center mt-2">
            <div>
              <div className="title font-semibold text-slate-500">Revenue</div>
              <div className="sm:text-lg ">$95,445.00</div>
              <div className="title font-semibold text-slate-500">Sales</div>
              <div className="sm:text-lg ">$95,445.00</div>
              <div className="title font-semibold text-slate-500">SKU's</div>
              <div className="sm:text-lg ">$95,445.00</div>
            </div>
            <div>
              <div className="title font-semibold text-slate-500">Velocity</div>
              <div className="sm:text-lg">$95,445.00</div>
              <div className="title font-semibold text-slate-500">Country</div>
              <div className="sm:text-lg">$95,445.00</div>
              <div className="title font-semibold text-slate-500">
                Tracked by
              </div>
              <div className="sm:text-lg">$95,445.00</div>
            </div>
          </div>
          <div className="piccs h-20 w-full border border-gray-300 rounded-md relative mt-2 flex gap-1 items-center justify-center">
            {pics.map((pic, idx) => {
              if (idx < 3) {
                return (
                  <img
                    key={idx}
                    src={pic.img}
                    alt=""
                    className="w-[30%] h-full"
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shops;
