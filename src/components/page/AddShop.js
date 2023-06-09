import { useState } from "react";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import UnderNav from "../layout/UnderNav";
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

const AddShop = () => {
  const [shop, setShop] = useState({ shop: "" });

  const change = (e) => setShop({ shop: e.target.value });

  const addShop = async (e) => {
    e.preventDefault();

    try {
      const res = await instance.post("/shop");
      // console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="bg-gray-200">
      <Navbar />
      <UnderNav text="Add Shop" />
      <div className="main p-4 mx-6 transform -translate-y-10 bg-white rounded-md">
        <div className="text-gray-800 font-semibold">Shopify Store URL</div>
        <form action="" className="" onSubmit={addShop}>
          <input
            type="text"
            placeholder="dropship.myshopify.com"
            className="outline-none p-3 border-2 border-gray-300 block w-full my-2 max-w-lg"
            value={shop.shop}
            name="shop"
            onChange={change}
            required
          />
          <button className="bg-blue-800 py-2 max-w-xs w-full text-white font-semibold rounded-sm hover:bg-blue-900">
            Add Shop
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AddShop;
