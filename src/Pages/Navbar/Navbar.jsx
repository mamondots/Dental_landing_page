import { useState } from 'react';
import logo from '../../assets/img/DlOGO.png'
import './Navbar.css'
import { RiMenu3Fill } from "react-icons/ri";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {

    const [open,setOpen] = useState(false)

    const handleToggle = () =>{
        setOpen(!open)
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-8">
            <div className='flex items-center justify-between'>
                <div className='lg:w-[20%] md:w-[20%] sm:w-[30%] w-[50%]'>
                    <img className='lg:w-[100%]' src={logo} alt="" />
                </div>

                <div className='lg:flex hidden items-center xl:space-x-10 lg:space-x-4 uppercase'>
                    <ul className='flex items-center xl:space-x-8 lg:space-x-4 font-medium nav_items'>
                        <li><a href="">home</a></li>
                        <li><a href="">about us</a></li>
                        <li><a href="">services</a></li>
                        <li><a href="">doctors</a></li>
                        <li><a href="">blogs</a></li>
                        <li><a href="">contact</a></li>
                    </ul>

                    <div >
                        <button className='uppercase text-sm font-medium px-6 py-3 bg-[#FF8000] rounded text-[#fff] hover:bg-[#2C4CA5] duration-300 cursor-pointer'>make an apartment</button>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <p onClick={handleToggle} className='py-2 px-2 border border-[#2C4CA5] text-xl hover:bg-[#2C4CA5] hover:text-[#fff] duration-300 cursor-pointer'><RiMenu3Fill /></p>
                </div>

                {
                    open? <div className='top-0 left-0 absolute bg-[#26262670] w-full h-screen lg:hidden z-50'>

                    <div className='bg-[#fff] md:w-[80vh] sm:w-[80vh] w-full  py-12 h-screen relative'>
                        <img className='lg:w-[80%] px-12' src={logo} alt="" />

                        <div className='py-8'>
                            <ul className='space-y-3 uppercase font-medium nav_items'>
                                <li className='border-b px-12'><a href="">home</a></li>
                                <li className='border-b px-12'><a href="">about us</a></li>
                                <li className='border-b px-12'><a href="">services</a></li>
                                <li className='border-b px-12'><a href="">doctors</a></li>
                                <li className='border-b px-12'><a href="">blogs</a></li>
                                <li className='border-b px-12'><a href="">contact</a></li>
                            </ul>

                            <div className='mt-4 px-12 bg-[#FF8000] hover:bg-[#2C4CA5] duration-300 cursor-pointer'>
                                <button className='uppercase text-sm font-medium px-6 py-3  rounded text-[#fff] '>make an apartment</button>
                            </div>
                        </div>

                        <div onClick={handleToggle} className='py-2 px-2 bg-[#FF8000] hover:bg-[#2C4CA5] duration-300 absolute top-0 right-0'>
                            <p><FaXmark /></p>
                        </div>
                    </div>

                </div>:
                ""
                }
            </div>
        </div>
    );
};

export default Navbar;