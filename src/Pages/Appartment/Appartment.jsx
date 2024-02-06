import img from '../../assets/img/appoinment.png'
const Appartment = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-8">
            <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">

                <div className='flex items-center justify-center lg:block'>
                    <img src={img} alt="" />
                </div>

                <div className='lg:mt-28'>
                    <h2 className='text-2xl font-normal py-4'>Make an Appointment</h2>
                    <p className='text-[#696969]'>We don’t want you to think what is the best for you. We know what it is and will make everything to help.</p>

                    <div className='mt-8'>
                        <form className='flex flex-col gap-4'>
                              <div className='flex items-center gap-4'>
                                  <input className='w-full py-2 px-4 border' type="text" placeholder='Name' />
                                  <input className='w-full py-2 px-4 border' type="text" placeholder='Phone Number' />
                              </div>
                              <div className='flex items-center gap-4'>
                                  <input className='w-full py-2 px-4 border' type="text" placeholder='Date' />
                                  <input className='w-full py-2 px-4 border' type="text" placeholder='Time' />
                              </div>

                              <div className='flex items-center gap-4'>
                                  <input className='w-full py-2 px-4 border' type="text" placeholder='Doctor Name' />
                              </div>

                              <div>
                                <button className='w-full py-3 text-center bg-[#209FD6] text-[#fff] hover:bg-[#FF8000] duration-300 cursor-pointer'>MAKE AN APPOINTMENT</button>
                              </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appartment;