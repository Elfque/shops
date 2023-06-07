import Navbar from "./Navbar";
import Footer from "./Footer";
import UnderNav from "./UnderNav";
import { BiCreditCard } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsPersonBadge } from "react-icons/bs";
import { Link } from "react-router-dom";

const Affiliate = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <UnderNav text={"Setings"} />
      <div className="main p-4 mx-6 transform -translate-y-10 bg-white rounded-md">
        <div className="lg:grid grid-cols-settings gap-4 divide-x-0 divide-y-2 lg:divide-x-2 lg:divide-y-0">
          <div className="left_part text-sm">
            <div className="flex gap-2 p-2 bg-green-600/20 items-center ">
              <BsPersonBadge />{" "}
              <Link to={"settings/profile"}>Personal Details</Link>
            </div>
            <div className="flex gap-2 p-2 items-center cursor-pointer text-green-700 border-l-4 border-green-700">
              <AiOutlineAppstoreAdd />
              <Link to={"settings/affiliate"}> Affiliate Program</Link>
            </div>
            <div className="flex gap-2 p-2 items-center cursor-pointer">
              <BiCreditCard /> Billing
            </div>
          </div>
          <div className="right_part pl-4">
            <div className="text-2xl font-semibold mb-6">
              Shophunter Affiliate Program
            </div>
            <div className="font-semibold">
              Welcome To Our Affiliate Program!
            </div>
            <div className="smalll mb-4">
              Our affiliate program is free to join. It's easy to sign-up and
              requires no technical knowledge. As an affiliate, you will earn a
              commission based on the traffic and sales you bring to Shophunter.
            </div>
            <div className="font-semibold">How does it work?</div>
            <div className="smalll mb-4">
              When you join our affiliate program, you will be supplied with a
              range of banners and textual links that you place within your
              site. When a user clicks on one of your links, they will be
              brought to our website and their activity will be tracked by our
              affiliate software. You will earn a commission based on your
              commission type.
            </div>
            <div className="font-semibold">How much will I earn?</div>
            <div className="smalll mb-4">
              You will earn 20% of the users purchase(s). This recurs monthly as
              long as the user's subscription remains active!
            </div>
            <div className="font-semibold">
              Ready? Click here to get started!
            </div>
            <button className="bg-bluish py-2 max-w-xs w-full text-white font-semibold rounded-md hover:bg-blue-900 mt-4">
              Shophunter Affiliate Program
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Affiliate;
