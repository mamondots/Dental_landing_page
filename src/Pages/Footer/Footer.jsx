import img from '../../assets/img/latest-work-1.jpg'
import img2 from '../../assets/img/latest-work-2.jpg'
import img3 from '../../assets/img/latest-work-3.jpg'
import img4 from '../../assets/img/latest-work-4.jpg'
import img5 from '../../assets/img/latest-work-5.jpg'
import img6 from '../../assets/img/latest-work-6.jpg'
const Footer = () => {
    return (
        <div className="bg-[#2A344A] xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-12">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-12 text-[#fff]">

                <div>
                    <h2 className="text-xl py-4 font-semibold">About Us</h2>
                    <p className="text-[#c2c2c2]">
                        How all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.
                    </p>
                </div>

                <div>
                    <h2 className="text-xl py-4 font-semibold">Quick Links</h2>
                    <ul className="space-y-2 text-[#d1d1d1]">
                        <li><a href="" className="space-x-2"><span className="">+</span><span>Our Services</span></a></li>
                        <li><a href="" className="space-x-2" ><span>+</span><span>About Dentalcare</span></a></li>
                        <li><a href="" className="space-x-2"><span>+</span><span>Customer Words</span></a></li>
                        <li><a href="" className="space-x-2"><span>+</span><span>Expert Dentist</span></a></li>
                        <li><a href="" className="space-x-2"><span>+</span><span>Make Appointment</span></a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl py-4 font-semibold">Contact Us</h2>
                    <ul className="space-y-2 text-[#d1d1d1]">
                        <li><a href="" className="space-x-2"><span className="">+</span><span>45 West Dental Street, NY 1003</span></a></li>
                        <li><a href="" className="space-x-2" ><span>+</span><span>+8801746770324</span></a></li>
                        <li><a href="" className="space-x-2"><span>+</span><span>Mail4u@Dentalcare.com</span></a></li>
                        <li><a href="" className="space-x-2"><span>+</span><span>Mon - Satday: 9.00am</span></a></li>
                        <li><a href="" className="space-x-2"><span>+</span><span>www.com</span></a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-xl py-4 font-semibold">Latest Works</h2>
                    <div className='flex flex-col gap-2 py-2'>
                        <div className='flex items-center gap-2'>
                            <img src={img} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <img src={img6} alt="" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;