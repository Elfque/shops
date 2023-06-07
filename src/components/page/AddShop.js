import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import UnderNav from "../layout/UnderNav";

const AddShop = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <UnderNav text="Add Shop" />
      <div className="main p-4 mx-6 transform -translate-y-10 bg-white rounded-md">
        <div className="text-gray-800 font-semibold">Shopify Store URL</div>
        <input
          type="text"
          placeholder="dropship.myshopify.com"
          className="outline-none p-3 border-2 border-gray-300 block w-2/5 my-2 max-w-lg"
        />
        <button className="bg-blue-800 py-2 max-w-xs w-full text-white font-semibold rounded-sm hover:bg-blue-900">
          Add Shop
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default AddShop;
