import { useEffect, useState } from "react";
import Card from "./Card";
import SmallCard from "./SmallCard";
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

const PicksMiddle = () => {
  const [tags, setTags] = useState([]);
  const [recent, setRecent] = useState([]);
  const [revenuePro, setRevenuePro] = useState([]);
  const [bestProduct, setBestProduct] = useState([]);

  useEffect(() => {
    instance.get("/dashboard/tags").then((data) => {
      setTags(data.data.tags);
    });

    instance.get("/dashboard/recent").then((data) => {
      setRecent(data.data.recently_added_products);
    });
    instance.get("/dashboard/top-revenue-producer").then((data) => {
      console.log(data);
      // setRevenuePro(data.data.recently_added_products);
    });

    instance.get("/dashboard/best-products").then((data) => {
      console.log(data);
      // setRevenuePro(data.data.recently_added_products);
    });
  }, []);
  const choices = [
    "Beauty",
    "Cat",
    "Fitness",
    "Summer",
    "Home",
    "Golf",
    "Motorcycle",
    "Survival",
    "Men",
    "Yoga",
    "Christian",
    "Tech",
    "Hair",
    "Dog",
    "Car",
    "Travels",
    "Suffy",
    "Baby",
    "Winter",
    "Solution",
    "Food",
    "POD",
    "Shapewear",
    "Women",
    "Appael",
    "Cause",
    "Kids",
    "General",
    "Patriot",
    "Pet",
    "Health",
    "Jewelry",
    "Patriotic",
  ];

  const [select, setSelect] = useState(choices[0]);

  return (
    <div className="picks grid lg:grid-cols-2 lg:mx-6 gap-4 w-[95%] mx-auto">
      <div className="long p-4 bg-white rounded-md row-span-3 w-full">
        <div className="font-semibold text-3xl mb-2">News Feed</div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="short bg-white py-2 rounded-t-md h-fit">
        <div>
          <div className="border-2 border-gray-700 rounded-lg grid grid-cols-3 w-60 lg:w-80 text-center mx-auto">
            <div className="text-gray-700 border-2 rounded-l-lg py-2">Day</div>
            <div className="text-gray-700 w-full py-2">Week</div>
            <div className="text-gray-700 border-2 rounded-r-lg py-2 w-full">
              Month
            </div>
          </div>
        </div>
      </div>
      <div className="mid bg-white p-4 h-fit">
        <div className="text-2xl mb-4">Filter By Tag</div>
        <div className="flex flex-wrap gap-3">
          {tags &&
            tags.map((cho, idx) => (
              <div
                className={`cho border-2 ${
                  select === cho
                    ? "border-blue-500 bg-blue-200"
                    : "border-gray-200"
                } rounded-2xl px-3 py-2 cursor-pointer`}
                key={idx}
                onClick={() => setSelect(cho)}
              >
                {cho}
              </div>
            ))}
        </div>
      </div>
      <div className="mid bg-white p-4">
        <div className="text-xl font-semibold">Recently Added Products</div>
        <div>New products from stores in this tag group.</div>

        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <div className="title grid grid-cols-12 col-span-12 text-center py-3">
            <div className="col-span-10">Name</div>
            <div className="col-span-2">Time</div>
          </div>
          {recent &&
            recent.map((rec, idx) => <SmallCard product={rec} key={idx} />)}
        </div>
      </div>
      <div className="mid bg-white p-4">
        <div className="text-xl font-semibold">Top Moving Stores</div>
        <div>
          Stores with the largest change in revenue since the previous time
          period.
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <div className="title grid grid-cols-12 col-span-12 text-center py-3">
            <div className="col-span-10">Name</div>
            <div className="col-span-2">Velocity</div>
          </div>
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
        </div>
      </div>
      <div className="mid bg-white p-4">
        <div className="text-xl font-semibold">Recently Added Products</div>
        <div>New products from stores in this tag group.</div>

        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <div className="title grid grid-cols-12 col-span-12 text-center py-3">
            <div className="col-span-10">Name</div>
            <div className="col-span-2">Time</div>
          </div>
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
          <SmallCard vel />
        </div>
      </div>
      <div className="mid bg-white p-4">
        <div className="text-xl font-semibold">Top Revenue Producers</div>
        <div>
          Products that account for a significant percentage of a store's total
          revenue.
        </div>
        <div className="flex items-center py-16 justify-center text-gray-700">
          Revenue share is not calculated for the day timeframe.
        </div>
      </div>
    </div>
  );
};

export default PicksMiddle;
