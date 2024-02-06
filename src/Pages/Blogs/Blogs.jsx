import blogs from '../../../public/blogs.json'
const Blogs = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-12">
            <div className="flex items-center justify-center flex-col text-center">
                <p className="font-medium uppercase">BLOG</p>
                <h2 className="py-3 text-2xl font-bold text-[#262626]">Recent Blog</h2>
                <p className="lg:px-20 text-[#767575]">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>
            </div>

            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    blogs.map((data,index) => <div key={index}>
                        <div className='group cursor-pointer'>
                             <div className='relative overflow-hidden'>
                                <img className='group-hover:scale-105 duration-500' src={data.img} alt="" />
                                <div className='bg-[#2F89FC] py-2 px-4 absolute top-0 left-0'>
                                    <h2 className='text-white'>6-Feb-2024</h2>
                                </div>
                             </div>
                             <div className='px-2 py-2'>
                                 <h2 className='text-xl font-medium py-2'>{data.title}</h2>
                                 <p className='text-[#565656]'>{data.text}</p>
                                 <button className='px-6 py-3 bg-[#2F89FC] my-3 text-white uppercase text-sm font-medium hover:bg-[#FF8000] duration-300 cursor-pointer hover:text-[#fff]'>read more</button>
                             </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;