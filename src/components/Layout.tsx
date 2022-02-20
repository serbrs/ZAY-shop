import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import { FaArrowUp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner1 from "../assets/img/banner_img_01.jpg";
import Banner2 from "../assets/img/banner_img_02.jpg";
import Banner3 from "../assets/img/banner_img_03.jpg";
import Categorie1 from "../assets/img/category_img_01.jpg";
import Categorie2 from "../assets/img/category_img_02.jpg";
import Categorie3 from "../assets/img/category_img_03.jpg";
import FeatureProd1 from "../assets/img/feature_prod_01.jpg";
import FeatureProd2 from "../assets/img/feature_prod_02.jpg";
import FeatureProd3 from "../assets/img/feature_prod_03.jpg";

const Layout = () => {
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
    <>
      <span
        onClick={() => scrollToTop()}
        className={`p-2 bg-black fixed bottom-9 right-4 cursor-pointer text-gray-200 text-lg rounded-md transition-all duration-150 ease-linear ${
          visible ? "inline-block" : "hidden"
        }`}
      >
        <FaArrowUp />
      </span>
      {/*  Banner Section */}
      <div className="bg-boz">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper w-auto max-w-7xl mx-auto"
        >
          {/* slider 1 start here */}
          <SwiperSlide className="flex flex-col items-center justify-center p-12 lg:p-14 xl:p-18 lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <img
                src={Banner1}
                alt="brand-1"
                className=" w-full h-72 md:h-80 lg:h-88 xl:h-min object-contain"
              />
            </div>
            <div className=" text-gray-700  lg:w-1/2 lg:px-0 lg:ml-10">
              <div className=" flex flex-row items-center ">
                <b className="text-green-500 font-bold text-5xl">Zay</b>
                <span className="inline-block text-4xl font-thin md:text-5xl ml-3 md:my-3 leading-loose">
                  eCommerce
                </span>
              </div>
              <h3 className="text-2xl text-gray-700 font-normal my-2 lg:text-3xl ">
                Aliquip ex ea commodo consequat
              </h3>
              <p className="text-xl font-light text-justify  md:mr-12 lg:mr-0">
                Zay Shop is an eCommerce HTML5 CSS template with latest version
                of Bootstrap 5 (beta 1). This template is 100% free provided
                byemplateMo website. Image credits go to Freepik Stories,and
                Icons 8.
              </p>
            </div>
          </SwiperSlide>
          {/* slider 1 end here */}

          {/* slider 2 start here */}
          <SwiperSlide className="flex flex-col items-center justify-center p-12 lg:p-14 xl:p-18 lg:flex-row-reverse ">
            <div className="lg:w-1/2">
              <img
                src={Banner2}
                alt="brand-1"
                className=" w-full h-72 md:h-80 lg:h-88 xl:h-min object-contain"
              />
            </div>
            <div className="text-gray-700  lg:w-1/2 lg:px-0 lg:ml-10">
              <div className=" flex flex-col md:flex-row md:items-center">
                <h1 className="text-4xl  md:text-5xl text-gray-500 font-light ">
                  Proident occaecat
                </h1>
              </div>
              <h3 className="text-2xl text-gray-700 font-normal my-2 lg:text-3xl ">
                Aliquip ex ea commodo consequat
              </h3>
              <p className="text-xl font-light text-justify  md:mr-12 lg:mr-0">
                You are permitted to use this Zay CSS template for your
                commercial websites. You are <strong>not permitted</strong> to
                re-distribute the template ZIP file in any kind of template
                collection websites.
              </p>
            </div>
          </SwiperSlide>
          {/* slider 2 end here */}

          {/* slider 3 start here */}
          <SwiperSlide className="flex flex-col items-center justify-center p-12 lg:p-14 xl:p-18 lg:flex-row-reverse">
            <div className="lg:w-1/2">
              <img
                src={Banner3}
                alt="brand-1"
                className=" w-full h-72 md:h-80 lg:h-88 xl:h-min object-contain"
              />
            </div>
            <div className=" text-gray-700  lg:w-1/2 lg:px-0 lg:ml-10 ">
              <div className=" flex flex-col md:flex-row md:items-center">
                <h1 className="text-4xl  md:text-5xl text-gray-500 font-light ">
                  Repr in voluptate
                </h1>
              </div>
              <h3 className="text-2xl text-gray-700 font-normal my-2 lg:text-3xl ">
                Ullamco laboris nisi ut
              </h3>
              <p className="text-xl font-light text-justify  md:mr-12 lg:mr-0">
                We bring you 100% free CSS templates for your websites. If you
                wish to support TemplateMo, please make a small contribution via
                PayPal or tell your friends about our website. Thank you.
              </p>
            </div>
          </SwiperSlide>
          {/* slider 3 end here */}
        </Swiper>
      </div>
      {/*  Categories */}
      <section className="py-10 mt-6 container mx-auto ">
        <h2 className="text-5xl text-center font-extralight text-gray-600 px-3 py-2 ">
          Categories of The Month
        </h2>
        <p className="text-center text-lg px-3 py-2  text-gray-400">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
        <div className="md:flex gap-x-8 justify-center items-center">
          {" "}
          {/* shoes */}
          <div className="flex flex-col items-center justify-center my-12">
            {" "}
            <img
              src={Categorie2}
              alt="Shoes"
              className="rounded-full h-72 w-72 sm:h-96 sm:w-96 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:w-72 xl:h-72 object-contain"
            />
            <h5 className="text-center mt-3 mb-3  text-lg font-bold ">Shoes</h5>
            <span className="text-center py-2 px-4 font-bold bg-green-600 text-gray-50 rounded-lg hover:bg-green-500 hover:text-gray-500 transition-all ease-in">
              <Link to="#">Go Shop</Link>
            </span>
          </div>
          {/* watches */}
          <div className="flex flex-col items-center justify-center my-12">
            {" "}
            <img
              src={Categorie3}
              alt="Accessories"
              className="rounded-full  h-72 w-72 sm:h-96 sm:w-96 md:h-56 md:w-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain"
            />
            <h5 className="text-center mt-3 mb-3  text-lg font-bold ">
              Accessories
            </h5>
            <span className="text-center py-2 px-4 font-bold bg-green-600 text-gray-50 rounded-lg hover:bg-green-500 hover:text-gray-500 transition-all ease-in">
              <Link to="#">Go Shop</Link>
            </span>
          </div>
          {/* accessories */}
          <div className="flex flex-col items-center justify-center mb-12 md:mb-0">
            {" "}
            <img
              src={Categorie1}
              alt="watches"
              className="rounded-full h-72 w-72 sm:h-96 sm:w-96 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:w-72 xl:h-72 object-contain"
            />
            <h5 className="text-center mt-3 mb-3  text-lg font-bold ">
              Watches
            </h5>
            <span className="text-center py-2 px-4 font-bold bg-green-600 text-gray-50 rounded-lg hover:bg-green-500 hover:text-gray-500 transition-all ease-in">
              <Link to="#">Go Shop</Link>
            </span>
          </div>
        </div>
      </section>
      {/* Products section */}
      <section className="py-14 mt-10 bg-boz ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl text-center font-extralight text-gray-600 px-3 py-2 ">
            Featured Product
          </h2>
          <p className="text-center text-lg px-3 py-2  text-gray-400">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          {/* product details */}
          <div className="md:flex my-2">
            <figure className="flex flex-col bg-slate-50 my-5 mx-3  hover:shadow-2xl transition-all ease-linear md:max-w-md lg:max-w-lg rounded-sm  ">
              <img
                className="h-88 lg:h-80  w-full object-cover"
                src={FeatureProd1}
                alt="Feature Product"
              />
              <figcaption className=" py-4 px-3">
                {/* star and price */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiOutlineStar className="text-xl" />
                    <HiOutlineStar className="text-xl" />
                  </div>
                  <span className="inline-block text-gray-400 font-semibold text-xl">
                    240$
                  </span>
                </div>
                {/* caption */}
                <div className="space-y-3">
                  <h2 className="text-2xl text-zinc-700 mt-2 font-semibold ">
                    Gym Weight
                  </h2>
                  <p className="text-lg font-medium text-zinc-900 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-gray-300 text-lg"> Reviews (42)</p>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col bg-slate-50 my-5 mx-3 hover:shadow-2xl transition-all ease-linear md:max-w-md lg:max-w-lg rounded-sm ">
              <img
                className="h-88 lg:h-80 w-full object-cover"
                src={FeatureProd2}
                alt="Feature Product"
              />
              <figcaption className=" py-4 px-3">
                {/* star and price */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiOutlineStar className="text-xl" />
                    <HiOutlineStar className="text-xl" />
                  </div>
                  <span className="inline-block text-gray-400 font-semibold text-xl">
                    480$
                  </span>
                </div>
                {/* caption */}
                <div className="space-y-3">
                  <h2 className="text-2xl text-zinc-700 mt-2 font-semibold ">
                    Cloud Nike Shoes
                  </h2>
                  <p className="text-lg font-medium text-zinc-900 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-gray-300 text-lg"> Reviews (48)</p>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col bg-slate-50 my-5 mx-3 hover:shadow-2xl transition-all ease-linear md:max-w-md lg:max-w-lg rounded-sm ">
              <img
                className="h-88 lg:h-80 w-full object-cover"
                src={FeatureProd3}
                alt="Feature Product"
              />
              <figcaption className=" py-4 px-3">
                {/* star and price */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                    <HiStar className="text-2xl text-yellow-500 " />
                  </div>
                  <span className="inline-block text-gray-400 font-semibold text-xl">
                    360$
                  </span>
                </div>
                {/* caption */}
                <div className="space-y-3">
                  <h2 className="text-2xl text-zinc-700 mt-2 font-semibold ">
                    Summer Addides Shoes
                  </h2>
                  <p className="text-lg font-medium text-zinc-900 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt in culpa qui officia deserunt.
                  </p>
                  <p className="text-gray-300 text-lg"> Reviews (48)</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Layout;
