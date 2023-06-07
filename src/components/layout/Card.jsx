const Card = () => {
  return (
    <div className="card flex gap-2 border-b border-gray-300 p-2">
      <div className="img bg-gray-200 flex items-center">
        <img src="/small.png" alt="" className="h-12" />
      </div>
      <div className="texts text-sm">
        <div className="text-gray-500 flex justify-between items-center">
          <div className="tt">Price Change</div>
          <div className="ago">an hour ago</div>
        </div>
        <div className="text-sm">
          <span className="font-semibold truncate">
            Ejvind-Kobenhavn <span className="text-green-600">increased</span>{" "}
          </span>
          the price of
        </div>
        <div className="font-semibold">
          KVINDERS OVERSIKKERT AFSLIDIG ÆRMØS JUMPSUIT
          <span className="font-light">(Grøn / M) from $19.07 to</span>
        </div>
        <div>$31.65 (+12.58).</div>
      </div>
    </div>
  );
};

export default Card;
