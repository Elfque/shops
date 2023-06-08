import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { AiOutlineDollarCircle, AiOutlinePlus } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import { BsFillGrid1X2Fill, BsCardList } from "react-icons/bs";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { AiOutlineRise } from "react-icons/ai";

const ShopView1 = () => {
  const products = [
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
    {
      img: "/img/6.png",
      name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae rem fugiat eum, pariatur ipsum? ",
      sales: 4,
      rev: "12,345,765",
      vel: "TBD",
    },
  ];

  const data = [
    { name: "Page A", uv: 400, pv: 200, amt: 2400 },
    { name: "Page B", uv: 250, pv: 100, amt: 2400 },
    { name: "Page C", uv: 300, pv: 20, amt: 2400 },
    { name: "Page D", uv: 100, pv: 500, amt: 2400 },
    { name: "Page E", uv: 50, pv: 300, amt: 2400 },
  ];

  const durations = ["Day", "Week", "Month"];
  const ranges = ["Revenue", "Velocity"];

  const [currDur, setCurrDur] = useState(durations[0]);
  const [showDrop, setShowDrop] = useState(false);
  const [range, setRange] = useState(ranges[0]);
  const [display, setDisplay] = useState("grid");

  const changeRange = (i) => {
    setShowDrop(false);
    setRange(ranges[i]);
  };

  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="picks bg-gray-800 px-6 py-3 text-gray-100 h-40">
        <div className="font-bold text-xl ">
          Poly & Bark | The Internet's Favorite Sofas (US)
        </div>
        <div className="text-gray-300">"poly-bark.myshopify.com</div>
      </div>
      <div className="main p-4 w-[90%] mx-auto transform -translate-y-10 bg-white rounded-md">
        <div className="gridpart grid sm:grid-cols-2 lg:grid-cols-4 items-start border rounded-md overflow-hidden mt-4 divide-x-2 divide-y-2">
          <div className="box w-full p-3 bg-rose-200">
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
            <LineChart width={700} height={300} data={data}>
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#000"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#000"
                strokeWidth={2}
              />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </div>
          <div className="py-2">
            <button className="text-white rounded-md bg-button_grey w-full py-2 font-semibold mt-2">
              View Products
            </button>
            <button className="text-white rounded-md bg-button_grey w-full py-2 font-semibold mt-2">
              Recent Sales
            </button>
            <button className="text-white rounded-md bg-button_grey w-full py-2 font-semibold mt-2">
              Untrack Stores
            </button>
            <div className="mt-3 mb-1">Tags</div>
            <div className="bg-slate-200 text-gray-400 w-fit py-1 px-2 rounded-md mb-3 flex gap-2 items-center">
              Add Tags <AiOutlinePlus />
            </div>
            <div className="font-semibold text-gray-800">Theme</div>
            <div className="mb-3 text-sm">
              Dawn <span className="text-gray-600">(Ver. 3.0.0)</span>
            </div>
            <div className="font-semibold text-gray-600">Trends</div>
            <div className="font-light mb-3 text-sm">
              1 other user(s) are tracking this store.
            </div>
            <div className="font-semibold text-gray-600 ">Apps</div>
            <a href="#" className="text-gray-800 underline text-sm block">
              InstaShow or Yottie
            </a>
            <a href="#" className="text-gray-800 underline text-sm block">
              Foursixty.com Shoppable Instagram
            </a>
            <a href="#" className="text-gray-800 underline text-sm block">
              Back in Stock
            </a>
            <a href="#" className="text-gray-800 underline text-sm block">
              Adroll
            </a>
            <a href="#" className="text-gray-800 underline text-sm block">
              Klaviyo
            </a>
          </div>
        </div>
        <div className="products">
          {/* CHOOSE DURATION */}
          <div className="chose_duration">
            <div className="border-2 border-gray-700 rounded-lg grid grid-cols-3 w-60 lg:w-80 text-center mx-auto divide-x-2">
              {durations.map((dur, idx) => (
                <div
                  className={`${
                    dur === currDur ? "bg-gray-700 text-white" : "text-gray-700"
                  } w-full py-2 font-semibold text-sm cursor-pointer`}
                  key={idx}
                  onClick={() => setCurrDur(dur)}
                >
                  {dur}
                </div>
              ))}
            </div>
          </div>

          {/* DROP PART */}
          <div className="sec flex justify-between mt-2 mb-4 flex-col items-start gap-2 sm:flew-row">
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
                <BsCardList onClick={() => setDisplay("list")} />
              </div>
              <div className="border border-gray-300 w-8 h-8 flex justify-center items-center cursor-pointer gridd">
                <BsFillGrid1X2Fill onClick={() => setDisplay("grid")} />
              </div>
            </div>
          </div>

          <div
            className={`product ${
              display === "list"
                ? "divide-y-[1px] border p-2"
                : "grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            }   border-gray-400 rounded-lg`}
          >
            {display === "list" && (
              <div className="main_product grid grid-cols-12 text-center px-4 py-2 bg-gray-300 font-semibold">
                <div className="col-span-5">Name</div>
                <div className="size">Sales</div>
                <div className="revenue col-span-2">Revenue</div>
                <div className="velocity col-span-2">Velocity</div>
                <div className="view-pro col-span-2">View Product</div>
              </div>
            )}
            {products.map((pro, idx) => (
              <div
                className={`main_product ${
                  display === "list"
                    ? "grid grid-cols-12 text-center"
                    : "border-gray-200 rounded-md"
                }  px-4 py-1 items-center w-full border`}
                key={idx}
              >
                <div
                  className={`gap-4 ${
                    display === "list" ? "flex col-span-5" : ""
                  } w-full items-center`}
                >
                  <img
                    src={pro.img}
                    alt=""
                    className={
                      display === "list"
                        ? "w-12 h-12"
                        : "w-full h-60 sm:h-80 object-cover"
                    }
                  />
                  <div className={display === "grid" && "font-semibold"}>
                    {pro.name}
                  </div>
                </div>
                <div className="size">
                  {display === "grid" && (
                    <span className="font-semibold">Price : </span>
                  )}
                  {pro.sales}
                </div>
                <div className="revenue col-span-2">
                  {display === "grid" && (
                    <span className="font-semibold">Revenue : </span>
                  )}
                  ${pro.rev}
                </div>
                <div className="velocity col-span-2">
                  {display === "grid" && (
                    <span className="font-semibold">Velocity : </span>
                  )}
                  {pro.vel}
                </div>
                <div className="view-pro col-span-2">
                  {display === "list" && (
                    <button className="border border-black text-black rounded-md px-4 py-2 text-sm">
                      View Product
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopView1;
