import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutHero from "../assets/img/about-hero.svg";
import {
  FaArrowUp,
  FaExchangeAlt,
  FaPercent,
  FaTruck,
  FaUserAlt,
} from "react-icons/fa";
import Brand1 from "../assets/img/brand_01.png";
import Brand2 from "../assets/img/brand_02.png";
import Brand3 from "../assets/img/brand_03.png";
import Brand4 from "../assets/img/brand_04.png";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleBtn);
  }, []);

  const handleVisibleBtn = () => {
    const position = window.pageYOffset;
    if (position > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <span
        onClick={() => scrollToTop()}
        className={`p-2 bg-black fixed bottom-12 right-6 cursor-pointer text-gray-200 text-lg rounded-md transition-all duration-150 ease-linear ${
          visible ? "inline-block" : "hidden"
        }`}
      >
        <FaArrowUp />
      </span>
      <Header />
      {/* About Us */}
      <section className="bg-green-600 py-10 px-10 md:py-10">
        <div className="max-w-7xl mx-auto md:flex  md:py-20 items-center justify-between">
          <div className="md:w-2/3 md:px-0 lg:w-1/2">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              About Us
            </h2>
            <p className="text-lg text-white font-medium lg:mt-3 lg:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              quo deserunt dignissimos fugiat necessitatibus architecto maxime
              quia, voluptatibus, est aspernatur fugit, recusandae laudantium
              earum non provident accusamus consectetur suscipit?
            </p>
          </div>
          <img
            src={AboutHero}
            alt="about hero svg"
            className="w-full md:w-1/3 lg:w-1/1 object-contain"
          />
        </div>
      </section>

      {/* Our Services */}
      <section className="pt-20 pb-24">
        <div className="mb-14 max-w-lg mx-auto">
          <h2 className="text-5xl text-center font-extralight text-gray-600 mb-4">
            Our Services
          </h2>
          <p className="text-center text-lg px-3  text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="justify-center items-center space-y-4 md:grid  md:grid-cols-2 lg:grid lg:grid-cols-4 lg:max-w-7xl lg:mx-auto lg:py-4">
          <div className="group flex flex-col items-center py-14 shadow-md  mx-4 rounded-md hover:shadow-xl hover:bg-green-500 transition duration-150 ease-linear lg:py-16 xl:py-20 ">
            <FaTruck className="text-7xl text-green-600 group-hover:text-white " />
            <h3 className="text-2xl font-semibold text-gray-700 group-hover:text-gray-50">
              Delivery Services
            </h3>
          </div>
          <div className="group flex flex-col items-center py-14 shadow-md  mx-4 rounded-md hover:shadow-xl hover:bg-green-500 transition duration-150 ease-linear lg:py-16 xl:py-20">
            <FaExchangeAlt className="text-6xl text-green-600 group-hover:text-white " />
            <h3 className="text-2xl font-semibold text-gray-700 group-hover:text-gray-50">
              Shippind & Return
            </h3>
          </div>
          <div className="group flex flex-col items-center py-14 shadow-md  mx-4 rounded-md hover:shadow-xl hover:bg-green-500 transition duration-150 ease-linear lg:py-16 xl:py-20">
            <FaPercent className="text-6xl text-green-600 group-hover:text-white " />
            <h3 className="text-2xl font-semibold text-gray-700 group-hover:text-gray-50">
              Promotion
            </h3>
          </div>
          <div className="group flex flex-col items-center py-14 shadow-md  mx-4 rounded-md hover:shadow-xl hover:bg-green-500 transition duration-150 ease-linear lg:py-16 xl:py-20">
            <FaUserAlt className="text-6xl text-green-600 group-hover:text-white " />
            <h3 className="text-2xl font-semibold text-gray-700 group-hover:text-gray-50">
              24 Hours Service
            </h3>
          </div>
        </div>
      </section>
      {/* Our Brands */}
      <section className="pt-20 pb-24 bg-boz">
        <div className="mb-14 max-w-lg mx-auto">
          <h2 className="text-5xl text-center font-extralight text-gray-600 mb-4">
            Our Brands
          </h2>
          <p className="text-center text-lg px-3  text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="max-w-5xl"
        >
          <SwiperSlide className="ml-3 md:ml-6 lg:ml-9 xl:ml-7 py-4">
            <div className="h-15 w-10 xl:h-20 xl:w-20">
              <img src={Brand1} alt="Brand1" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-10 h-15 py-4 xl:h-20 xl:w-20">
              <img src={Brand2} alt="Brand2" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-10 h-15 py-4 xl:h-20 xl:w-20">
              <img src={Brand3} alt="Brand3" className="w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="w-10 h-15 py-4 xl:h-20 xl:w-20">
              <img src={Brand4} alt="Brand4" className="w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <Footer />
    </div>
  );
};

export default About;
