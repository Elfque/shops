import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import PicksMiddle from "../layout/PicksMiddle";
import UnderNav from "../layout/UnderNav";

const StaffPicks = () => {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <UnderNav text="Staff Picks" />
      <div className="px-6">
        <div className="second lg:flex justify-between under p-3 rounded-md items-center transform -translate-y-16">
          <div className="left text-white">
            <div className="mb-6">Welcome to Shophunter.io!</div>
            <div>
              We've loaded this page with a hand-picked selection of shops and
              products. To make this page your own, check out your personal
              dashboard!
            </div>
          </div>
          <button className="bg-gray-700 text-white p-3 text-sm rounded-lg">
            Go to Dashboard
          </button>
        </div>
      </div>
      <PicksMiddle />
      <Footer />
    </div>
  );
};

export default StaffPicks;
