const SmallCard = ({ product, vel }) => {
  return (
    <div className="grid grid-cols-12 items-center py-1 bg-white mt-[2px] px-1 cursor-pointer">
      <div className="flex gap-2 items-center col-span-10">
        <img src={product?.product.thumbnail_img} alt="" className="h-4 w-4" />
        <div className="text truncate">{product?.product.title}</div>
      </div>
      {vel ? (
        <div className="time col-span-2 text-red-500">567.724%</div>
      ) : (
        <div className="time col-span-2">a day ago</div>
      )}
    </div>
  );
};

export default SmallCard;
