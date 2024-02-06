import { useState } from "react";
import './Department.css'
import Neurology from "./Neurology/Neurology";
import Surgical from "./Surgical/Surgical";
import Dental from "./Dental/Dental";
import Ophthalmology from "./Ophthalmology/Ophthalmology";
import Cardiology from "./Cardiology/Cardiology";

const Department = () => {
    const [toggle, setToggle] = useState(1)
    const toggleTabs = (index) => {
        setToggle(index)
    }
    return (
        <div className="xl:px-20 lg:px-16 md:px-16 sm:px-12 px-12 py-8">
            <div className="flex items-center justify-center flex-col text-center">
                <p className="font-medium uppercase">DEPARTMENTS</p>
                <h2 className="py-3 text-2xl font-bold text-[#262626]">Clinic Departments</h2>
                <p className="lg:px-20 text-[#767575]">
                    Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
                </p>
            </div>

            <div className="my-8">
                <div className="tab_box flex flex-wrap lg:flex-nowrap items-center w-full bg-[#F2F2F2]">
                    <button
                     onClick={() => toggleTabs(1)}
                        className={toggle === 1 ? "tabs active-tabs py-10 px-10 w-full text-center text-xl font-medium bg-[#2F89FC] text-[#fff]":"tabs py-10 px-10 w-full text-center text-xl font-medium"}>
                        Neurology
                    </button>

                    <button
                        onClick={() => toggleTabs(2)}
                        className={toggle === 2 ? "tabs active-tabs py-10 px-10 w-full text-center text-xl font-medium bg-[#2F89FC] text-[#fff]":"tabs py-10 px-10 w-full text-center text-xl font-medium"}>
                        Surgical
                    </button>

                    <button
                        onClick={() => toggleTabs(3)}
                        className={toggle === 3 ? "tabs active-tabs py-10 px-10 w-full text-center text-xl font-medium bg-[#2F89FC] text-[#fff]":"tabs py-10 px-10 w-full text-center text-xl font-medium"}>
                        Dental
                    </button>

                    <button
                        onClick={() => toggleTabs(4)}
                        className={toggle === 4 ? "tabs active-tabs py-10 px-10 w-full text-center text-xl font-medium bg-[#2F89FC] text-[#fff]":"tabs py-10 px-10 w-full text-center text-xl font-medium"}>
                        Ophthalmology
                    </button>

                    <button
                        onClick={() => toggleTabs(5)}
                        className={toggle === 5 ? "tabs active-tabs py-10 px-10 w-full text-center text-xl font-medium bg-[#2F89FC] text-[#fff]":"tabs py-10 px-10 w-full text-center text-xl font-medium"}>
                        Cardiology
                    </button>
                </div>

                <div className="mt-8">
                        <div className={toggle === 1 ? "content active-content":"content"}>
                                <Neurology></Neurology>
                        </div>
                        <div className={toggle === 2 ? "content active-content":"content"}>
                                <Surgical></Surgical>
                        </div>
                        <div className={toggle === 3 ? "content active-content":"content"}>
                                <Dental></Dental>
                        </div>
                        <div className={toggle === 4 ? "content active-content":"content"}>
                                <Ophthalmology></Ophthalmology>
                        </div>
                        <div className={toggle === 5 ? "content active-content":"content"}>
                                <Cardiology></Cardiology>
                        </div>
                       
                </div>
            </div>
        </div>
    );
};

export default Department;