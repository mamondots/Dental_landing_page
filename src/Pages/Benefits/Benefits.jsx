import { FaUserDoctor } from "react-icons/fa6";
import { CiMedicalCase } from "react-icons/ci";
import { LuStethoscope } from "react-icons/lu";
import { Ri24HoursFill } from "react-icons/ri";


const Benefits = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 mt-[-16vh] relative z-10 py-12">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-0 gap-4">

                <div className="bg-[#2F89FC] px-4 py-8 flex items-center justify-center flex-col  text-center">
                    <div className="px-6 py-6 rounded-full bg-[#61A6FD]">
                        <p className="text-2xl text-[#fff]"><FaUserDoctor /></p>
                    </div>
                    <div className="py-6 space-y-2">
                        <h2 className="text-2xl font-medium text-[#fff]">Qualitfied Doctors</h2>
                        <p className="text-[#ddd]">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>

                <div className="bg-[#0C75FB] px-4 py-8 flex items-center justify-center flex-col  text-center">
                    <div className="px-6 py-6 rounded-full bg-[#61A6FD]">
                        <p className="text-2xl text-[#fff]"><CiMedicalCase /></p>
                    </div>
                    <div className="py-6 space-y-2">
                        <h2 className="text-2xl font-medium text-[#fff]">Emergency Care</h2>
                        <p className="text-[#ddd]">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>

                <div className="bg-[#2F89FC] px-4 py-8 flex items-center justify-center flex-col  text-center">
                    <div className="px-6 py-6 rounded-full bg-[#61A6FD]">
                        <p className="text-2xl text-[#fff]"><LuStethoscope /></p>
                    </div>
                    <div className="py-6 space-y-2">
                        <h2 className="text-2xl font-medium text-[#fff]">Outdoor Checkup</h2>
                        <p className="text-[#ddd]">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>

                <div className="bg-[#0C75FB] px-4 py-8 flex items-center justify-center flex-col  text-center">
                    <div className="px-6 py-6 rounded-full bg-[#61A6FD]">
                        <p className="text-2xl text-[#fff]"><Ri24HoursFill /></p>
                    </div>
                    <div className="py-6 space-y-2">
                        <h2 className="text-2xl font-medium text-[#fff]">24 Hours Service</h2>
                        <p className="text-[#ddd]">
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Benefits;