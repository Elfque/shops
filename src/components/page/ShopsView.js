import Navbar from "../layout/Navbar";
import UnderNav from "../layout/UnderNav";
import Footer from "../layout/Footer";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACK_URI,
  headers: {
    common: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  },
});

const ShopView = () => {
  const [shopData, setShopData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    instance
      .get(`/shop/${id}`, {
        headers: {
          common: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      })
      .then((data) => setShopData(data));
  }, []);

  return (
    <div className="bg-gray-300">
      <Navbar />
      <UnderNav text="EPIKO (SE)" text1="denvilljagha.myshopify.com" />
      <div className="main p-4 mx-6 transform -translate-y-10 bg-white rounded-md">
        <div className="border border-black rounded-lg p-4">
          <div className="text">
            It looks like you aren't tracking this store yet. Click the button
            below to connect it to your account.
          </div>
          <button className="bg-blue-800 text-white py-2 mt-4 max-w-xs w-full rounded-md">
            Track Store
          </button>
        </div>

        <div className="gridpart grid sm:grid-cols-2 lg:grid-cols-4 items-start border rounded-md overflow-hidden mt-4 divide-x-2 divide-y-2">
          <div className="box w-full p-3 bg-greeny">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle className="text-2xl" />
                <div className="text-slate-800 text-lg font-medium">
                  Total sales
                </div>
              </div>
              <div className="italic text-sm">Rolling 24H</div>
            </div>
            <div className="box font-bold text-black text-2xl pl-1 mt-5">
              $2,039,792.30
            </div>
            <div className="flex gap-2 mt-3 text-sm items-center">
              <BsArrowUpRight className="w-3 h-3" />
              <div className="">62.7%</div>
              <div className="">(+$786,044.55)</div>
            </div>
          </div>
          <div className="box w-full p-3 ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle className="text-2xl" />
                <div className="text-slate-800 text-lg font-medium">
                  Total sales
                </div>
              </div>
              <div className="italic text-sm">Rolling 24H</div>
            </div>
            <div className="box font-bold text-black text-2xl pl-1 mt-5">
              $2,039,792.30
            </div>
            <div className="flex gap-2 mt-3 text-sm items-center">
              <BsArrowUpRight className="w-3 h-3" />
              <div className="">62.7%</div>
              <div className="">(+$786,044.55)</div>
            </div>
          </div>
          <div className="box w-full p-3 h-full">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle className="text-2xl" />
                <div className="text-slate-800 text-lg font-medium">
                  Total sales
                </div>
              </div>
              <div className="italic text-sm">Rolling 24H</div>
            </div>
            <div className="box font-bold text-black text-2xl pl-1 mt-5">
              $2,039,792.30
            </div>
          </div>
          <div className="box w-full p-3 h-full">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle className="text-2xl" />
                <div className="text-slate-800 text-lg font-medium">
                  Total sales
                </div>
              </div>
              <div className="italic text-sm">Rolling 24H</div>
            </div>
            <div className="box font-bold text-black text-2xl pl-1 mt-5">
              $2,039,792.30
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-start">
          <div className="three hidden col-span-3 items-center justify-center h-full lg:flex">
            Start tracking this store to see historical data and product
            details.
          </div>
          <div className="p-2">
            <div className="font-semibold text-gray-600">Theme</div>
            <div className="mb-3 text-sm">
              Dawn <span className="text-gray-600">(Ver. 3.0.0)</span>
            </div>
            <div className="font-semibold text-gray-600">Trends</div>
            <div className="font-light mb-3 text-sm">
              1 other user(s) are tracking this store.
            </div>
            <div className="font-semibold text-gray-600">Trends</div>
            <a href="#" className="text-gray-800">
              Frequently Bought Together
            </a>
            <a href="#" className="text-gray-800">
              Klaviyo
            </a>
            <a href="#" className="text-gray-800">
              Vitals
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopView;
