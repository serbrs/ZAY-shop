import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header>
      <div className=" bg-gray-800 p-3 hidden lg:block z-10  ">
        <div className=" max-w-7xl mx-auto text-gray-400 hidden md:flex  items-center justify-between">
          {/* Contact info */}
          <div className="flex">
            <a
              href="mailto:someone@yoursite.com"
              className="flex items-center "
            >
              <FaMailBulk /> <h3 className=" text-sm ml-2 ">email@mail.com</h3>
            </a>
            <a href="tel:999-888-777" className="flex items-center ml-3">
              <FaPhoneAlt /> <h3 className=" text-sm ml-2 ">999-888-777</h3>
            </a>
          </div>
          {/* Social media */}
          <div className="flex items-center gap-1">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
