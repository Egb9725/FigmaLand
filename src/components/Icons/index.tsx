import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Icons = () => {
  return (
    <div className="flex space-x-4">
      <a href="#">
        <FaSquareXTwitter className="w-5 h-5" />
      </a>
      <a href="#">
        <IoLogoFacebook className="w-5 h-5" />
      </a>
      <a href="#">
        <FaLinkedin className="w-5 h-5" />
      </a>
    </div>
  );
};

export default Icons;
