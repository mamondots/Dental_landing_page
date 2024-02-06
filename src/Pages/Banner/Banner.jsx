import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'
const Banner = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        fade: true,
        autoplay: true,
        speed:500,
        autoplaySpeed:5000,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="">
            <div>
                <Slider {...settings} className="">
                    <div className="banner1_bg py-32 xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12">
                        <p className="text-xl font-medium">Wellcome to our Dentalcare</p>
                        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-extrabold py-4 capitalize lg:w-[42%] leading-tight">Your smiles with us  stay happy us</h2>
                        <p className="text-xl lg:w-[50%]">
                            Explain to you how all this mistaken idea  denouncing  was born in our clinic you a complete.
                        </p>
                        <button className="my-8 px-6 py-2 bg-[#FF8000] text-[#fff] 
                        uppercase font-medium hover:bg-[#2C4CA5] duration-300 cursor-pointer">meet dentist</button>
                    </div>


                    <div className="banner2_bg py-32 xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12">
                        <p className="text-xl font-medium">World class Treatment</p>
                        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-extrabold py-4 capitalize lg:w-[42%] leading-tight">qulity & affortable  about your health</h2>
                        <p className="text-xl lg:w-[50%]">
                            Explain to you how all this mistaken idea  denouncing  was born in our clinic you a complete.
                        </p>
                        <button className="my-8 px-6 py-2 bg-[#FF8000] text-[#fff] uppercase font-medium  hover:bg-[#2C4CA5] duration-300 cursor-pointer">special offer
                        </button>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

export default Banner;