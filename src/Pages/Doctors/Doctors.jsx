import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Slider from "react-slick";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter,FaLinkedinIn  } from "react-icons/fa";
import './Doctors.css'


import doctors from '../../../public/doctors.json'

function SampleNextArrow(props) {
    const { onClick } = props;
    return (

        <div className="arrow arrow-next" onClick={onClick}>
            <GoArrowLeft />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className="arrow arrow-prev" onClick={onClick}>
            <GoArrowRight />
        </div>
    );
}
const Doctors = () => {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-8">
            <div className="flex items-center justify-center flex-col text-center">
                <p className="font-medium uppercase">DOCTORS</p>
                <h2 className="py-3 text-2xl font-bold text-[#262626]">Our Qualified Doctors</h2>
                <p className="lg:px-20 text-[#767575]">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                </p>
            </div>


            <div className="mt-12">
                <Slider {...settings} className="">
                    {
                        doctors.map((data, index) => <div key={index}>
                            <div className="px-4 mx-2 border py-4 full_box">
                                <div className="relative img_overlay">
                                    <img className="w-full " src={data.img} alt="" />
                                    <div className="flex items-center justify-center absolute bottom-0 left-[25%] space-x-1">
                                        <p className="px-2 py-2 text-xl bg-[#fff] border text-[#6e6d6d] 
                                        hover:bg-[#2F89FC] hover:text-[#fff] duration-300 cursor-pointer"><FaFacebookF /></p>
                                        <p className="px-2 py-2 text-xl bg-[#fff] border text-[#6e6d6d] 
                                        hover:bg-[#2F89FC] hover:text-[#fff] duration-300 cursor-pointer"><FaTwitter /></p>
                                        <p className="px-2 py-2 text-xl bg-[#fff] border text-[#6e6d6d] 
                                        hover:bg-[#2F89FC] hover:text-[#fff] duration-300 cursor-pointer"><FaLinkedinIn /></p>
                                        
                                    </div>
                                </div>

                                <div className="py-2 flex flex-col text-center">
                                    <h2 className="text-xl font-semibold py-1">{data.name}</h2>
                                    <p className="text-[#5c5c5c]">{data.title}</p>
                                    <p className="text-[#5c5c5c] py-2">{data.description}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Doctors;