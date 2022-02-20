import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-10 space-y-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-1 lg:gap-4 mb-2 md:mb-4">
          <div className="mx-7">
            <h2 className="text-green-500 font-bold text-3xl leading-loose border-b-2 border-gray-600 mb-2">
              Zay Shop
            </h2>

            <ul className="text-lg text-gray-400 font-light space-y-2">
              <li className="flex items-center">
                {" "}
                <FaMapMarkerAlt />
                <Link to="/" className="ml-2 font-medium">
                  123 Consectetur at ligula 10660
                </Link>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt />
                <Link to="/" className="ml-2 font-medium">
                  010-020-0340
                </Link>
              </li>
              <li className="flex items-center">
                <FaEnvelope />
                <Link to="/" className="ml-2 font-medium">
                  info@company.com
                </Link>
              </li>
            </ul>
          </div>{" "}
          <div className="mx-7">
            <h2 className=" text-gray-200 font-extralight text-3xl leading-loose border-b-2 border-gray-600 mb-2">
              Products
            </h2>

            <ul className="text-lg text-gray-400 font-light space-y-2">
              <li>
                <Link to="/" className=" font-medium">
                  Luxury
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Sport Wear
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Men's Shoes
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Women's Shoes
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Popular Dress
                </Link>
              </li>
              <li>
                <Link to="/" className="font-medium">
                  Gym Accessories
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Sport Shoes
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-7">
            <h2 className=" text-gray-200 font-extralight text-3xl leading-loose border-b-2 border-gray-600 mb-2">
              Further Info
            </h2>

            <ul className="text-lg text-gray-400 font-light space-y-2">
              <li>
                <Link to="/" className=" font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Shop Location
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className=" font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-7 md:flex items-center justify-between border-t-2 space-y-4 md:space-y-0 py-4 md:py-6  border-gray-600 ">
          {/* social media icons */}
          <div className="flex items-center gap-4 text-4xl  text-gray-500 ">
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaTwitterSquare />
            <FaLinkedin />
          </div>
          {/* subscribe */}
          <div className=" flex flex-1  max-w-sm md:max-w-xs ">
            <label className="sr-only" htmlFor="subscribeEmail">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="py-2 px-2 block w-full bg-black border rounded-l-md  border-gray-700 focus:outline-none focus:ring-4 ring-blue-500/50 transition-all "
            />

            <a
              href="#/"
              className="bg-green-700  text-gray-300 px-3 py-2 rounded-r-md"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="bg-dark  py-4 ">
        <p className="text-center text-gray-200 mx-7">
          Copyright © 2021 Company Name | Designed by{" "}
          <a
            rel="noreferrer"
            href="website.com"
            target="_blank"
            className="underline underline-offset-2 "
          >
            WebsiteMo
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
