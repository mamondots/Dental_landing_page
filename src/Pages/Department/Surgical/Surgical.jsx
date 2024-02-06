import { CiMedicalCase } from "react-icons/ci";
import { GiMedicalThermometer } from "react-icons/gi";
import { LuStethoscope } from "react-icons/lu";
import { LuHeartPulse } from "react-icons/lu";

const Surgical = () => {
    return (
        <div className="bg-[#FAFAFA] px-4 py-8">
            <h2 className="text-2xl font-bold py-2">Surgical Deparments</h2>
            <p className="text-[#606060] lg:w-[80%]">
                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
            </p>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-4 lg:mt-12 mt-8'>

                <div className='flex items-start justify-center space-x-4'>
                    <div className='py-4 px-4 bg-[#2F89FC] text-[#fff] inline-block'>
                        <p className='text-2xl '><CiMedicalCase /></p>
                    </div>
                    <div className='mt-[-3vh]'>
                        <h2 className='text-xl font-medium py-3'>PRIMARY CARE</h2>
                        <p className='text-[#6c6b6b]'>
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>
                </div>

                <div className='flex items-start justify-center space-x-4'>
                    <div className='py-4 px-4 bg-[#2F89FC] text-[#fff] inline-block'>
                        <p className='text-2xl '><GiMedicalThermometer /></p>
                    </div>
                    <div className='mt-[-3vh]'>
                        <h2 className='text-xl font-medium py-3'>LAB TEST</h2>
                        <p className='text-[#6c6b6b]'>
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>
                </div>

                <div className='flex items-start justify-center space-x-4'>
                    <div className='py-4 px-4 bg-[#2F89FC] text-[#fff] inline-block'>
                        <p className='text-2xl '><LuStethoscope /></p>
                    </div>
                    <div className='mt-[-3vh]'>
                        <h2 className='text-xl font-medium py-3'>SYMPTOM CHECK</h2>
                        <p className='text-[#6c6b6b]'>
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>
                </div>

                <div className='flex items-start justify-center space-x-4'>
                    <div className='py-4 px-4 bg-[#2F89FC] text-[#fff] inline-block'>
                        <p className='text-2xl '><LuHeartPulse /></p>
                    </div>
                    <div className='mt-[-3vh]'>
                        <h2 className='text-xl font-medium py-3'>HEART RATE</h2>
                        <p className='text-[#6c6b6b]'>
                            Far far away, behind the word mountains, far from the countries Vokalia.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Surgical;