import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="block lg:flex px-6 p-6 bg-white text-gray-600 mt-10 justify-between items-center text-center">
      <div className="flex gap-4 flex-wrap justify-center">
        <div> ©2022 Backslash, Inc.</div>
        <div>Terms </div>
        <div>Privacy </div>
        <div> Contact</div>
      </div>
      <div className="icons flex gap-4 text-lg justify-center">
        <Link>
          <AiOutlineInstagram />
        </Link>
        <Link>
          <BsDiscord />
        </Link>
        <Link>
          <AiOutlineTwitter />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
