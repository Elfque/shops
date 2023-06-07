const UnderNav = ({ text, text1 }) => {
  return (
    <div className="picks bg-gray-800 px-6 py-3 text-gray-100 h-40">
      <div className="font-bold text-4xl ">{text}</div>
      {text1 && <div className="text-gray-300">{text1}</div>}
    </div>
  );
};

export default UnderNav;
