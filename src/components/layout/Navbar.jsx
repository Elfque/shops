const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="flex items-center gap-4">
          <div className="logo">
            <img src="/small.png" alt="" className="h-12" />
          </div>
          <div className="links lg:flex gap-4 hidden">
            <button className="hover:bg-gray-600 p-2 rounded-sm">
              Staff Picks
            </button>
            <button className="hover:bg-gray-600 p-2 rounded-sm">
              Explore
            </button>
            <div className="open relative">
              <button className="hover:bg-gray-600 p-2 rounded-sm">
                Top Performer
              </button>
              <div className="smallie ">
                <div className="my-2">Top Stores</div>
                <div className="my-2">Top Products</div>
                <div className="my-2">Top Tracked</div>
                <div className="my-2">Recently Adde Product</div>
              </div>
            </div>
            <div className="open relative">
              <button className="hover:bg-gray-600 p-2 rounded-sm">
                My Shophunter
              </button>
              <div className="smallie ">
                <div className="my-2">Dashboard</div>
                <div className="my-2">My Tracked Shops</div>
                <div className="my-2">Tracked Shop Products Leaderboard</div>
                <div className="my-2">Add Shop</div>
                <div className="my-2">Product Collection</div>
              </div>
            </div>
          </div>
        </div>
        <div className="email hover:bg-gray-600 p-2 rounded-sm">
          example@gmail.com
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
