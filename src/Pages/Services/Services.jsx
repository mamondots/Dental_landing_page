import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from '../../../public/services.json'
import './Services.css'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

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


const Services = () => {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
                <p className="font-medium uppercase">Special Services</p>
                <h2 className="py-3 text-2xl font-bold text-[#262626]">Affortable and Quality Dental Care</h2>
                <p className="lg:px-20 text-[#767575]">How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer.</p>
            </div>

            <div className="mt-8">
                <Slider {...settings} className="">
                    {
                        services.map((data, index) => <div key={index}>
                            <div className="px-4">
                                <div className="img_box relative">
                                    <img className="w-full" src={data.img} alt="" />
                                    <div className="details_box text-center px-4 py-16 text-[#fff]">
                                        <p>{data.description}</p>
                                        <p className="text-sm uppercase font-medium  mt-4 py-2 px-4 border inline-block hover:bg-[#FF9223] hover:border-transparent duration-300 cursor-pointer">read more</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="px-2 py-4 uppercase text-xl">{data.title}</h2>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Services;