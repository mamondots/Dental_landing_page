import about from '../../assets/img/about.jpg.webp'
import { CiMedicalCase } from "react-icons/ci";
import { GiMedicalThermometer } from "react-icons/gi";
import { LuStethoscope } from "react-icons/lu";
import { LuHeartPulse } from "react-icons/lu";

const About = () => {
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 pb-8">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
                <div className='flex items-center justify-center lg:block'>
                    <img src={about} alt="" />
                </div>
                <div className='lg:mt-8'>
                    <p className='text-lg py-2'>
                        ABOUT DR.CARE
                    </p>
                    <h2 className='text-2xl font-bold'>
                        Medical specialty concerned with the care of acutely ill hospitalized patients
                    </h2>
                    <p className='lg:py-8 py-4 text-[#4d4d4d]'>
                        On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.
                    </p>

                    <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-8 gap-4 lg:mt-12 mt-8'>

                        <div className='flex items-start justify-center space-x-4'>
                            <div className='py-4 px-4 border-2 border-[#0C75FB] inline-block'>
                                <p className='text-2xl text-[#0C75FB]'><CiMedicalCase /></p>
                            </div>
                            <div className='mt-[-3vh]'>
                                <h2 className='text-xl font-medium py-3'>PRIMARY CARE</h2>
                                <p className='text-[#6c6b6b]'>
                                    Far far away, behind the word mountains, far from the countries Vokalia.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-start justify-center space-x-4'>
                            <div className='py-4 px-4 border-2 border-[#0C75FB] inline-block'>
                                <p className='text-2xl text-[#0C75FB]'><GiMedicalThermometer /></p>
                            </div>
                            <div className='mt-[-3vh]'>
                                <h2 className='text-xl font-medium py-3'>LAB TEST</h2>
                                <p className='text-[#6c6b6b]'>
                                    Far far away, behind the word mountains, far from the countries Vokalia.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-start justify-center space-x-4'>
                            <div className='py-4 px-4 border-2 border-[#0C75FB] inline-block'>
                                <p className='text-2xl text-[#0C75FB]'><LuStethoscope /></p>
                            </div>
                            <div className='mt-[-3vh]'>
                                <h2 className='text-xl font-medium py-3'>SYMPTOM CHECK</h2>
                                <p className='text-[#6c6b6b]'>
                                    Far far away, behind the word mountains, far from the countries Vokalia.
                                </p>
                            </div>
                        </div>

                        <div className='flex items-start justify-center space-x-4'>
                            <div className='py-4 px-4 border-2 border-[#0C75FB] inline-block'>
                                <p className='text-2xl text-[#0C75FB]'><LuHeartPulse /></p>
                            </div>
                            <div className='mt-[-3vh]'>
                                <h2 className='text-xl font-medium py-3'>HEART RATE</h2>
                                <p className='text-[#6c6b6b]'>
                                    Far far away, behind the word mountains, far from the countries Vokalia.
                                </p>
                            </div>
                        </div>

                    </div>

                    <p className='py-8 text-[#4d4d4d]'>
                        We have built an enviable reputation in the consumer goods, heavy industry, high-tech, manufacturing, medical, recreational vehicle, and transportation sectors. multidisciplinary team of engineering experts.
                    </p>

                    <p className='text-[#4d4d4d]'>
                        Who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;