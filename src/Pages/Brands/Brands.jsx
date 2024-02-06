import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brands from '../../../public/brands.json'

const Brands = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12">
            <div className="flex items-center justify-center flex-col text-center">
                <p className="font-medium uppercase">BRANDS</p>
                <h2 className="py-3 text-2xl font-bold text-[#262626]">Supporting Partners</h2>
                <p className="lg:px-20 text-[#767575]">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>

            <div className="py-8">
                <Slider {...settings} className="">
                    {
                        brands.map((data,index) => <div key={index}>
                            <div className="border p-4 mx-2">
                                 <img src={data.img} alt="" />
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Brands;