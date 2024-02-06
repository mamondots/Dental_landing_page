import './Subscribe.css'
const Subscribe = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-12 bg_sub">
            <div className='flex justify-center items-center flex-col text-center'>
                <h2 className='text-[#fff] lg:text-3xl text-2xl font-semibold py-2'>Subscribe for Offers, Coupons and Deals</h2>
                <p className='lg:w-[70%] text-[#d3d3d3]'>We list all these discount coupons, deals and offers on various treatments. Get the latest and up-to-date coupons & cashback offers</p>
            </div>

            <div className='my-6'>
                 <form action="" className='flex flex-wrap lg:flex-nowrap items-center gap-2'>
                      <input className='w-full text-[#fff] py-2 px-2 border bg-transparent outline-none' type="text" placeholder='Name..' />
                      <input className='w-full text-[#fff] py-2 px-2 border bg-transparent outline-none' type="text" placeholder='Number..' />
                      <input className='w-full text-[#fff] py-2 px-2 border bg-transparent outline-none' type="text" placeholder='Email..' />
                      <input className='w-full text-[#fff] py-2 px-2  bg-[#209FD6] text-[#fff] uppercase cursor-pointer outline-none hover:bg-[#FF8000] duration-300' type="submit" value="subcribe us" />
                 </form>
            </div>
        </div>
    );
};

export default Subscribe;