import React from 'react';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Salesgpt = () => {
    return (
        <main className='h-[calc(100vh]'>
        <div className="w-full h-screen flex">

            <aside className="h-screen md:hidden lg:flex w-2/5 lg:w-1/4 xl:w-[348px] min-w-fit hidden bg-black mt-20" >
                <div className="w-full h-full bg-main-gradient flex justify-start items-start">
                    <div className="w-[68%] h-full pt-2 mx-auto flex justify-start items-start">
                        <div className="flex flex-col items-start gap-y-20 justify-evenly">
                            <Link to="/">
                                <button className="flex items-center gap-x-2">
                                <IoArrowBackCircleSharp  className='bg-white size-10 mt-10'/>

                                </button>
                            </Link>
                            <div className=" text-white mt-10 pt-5  ">
                                <h4 className="text-blue-300 text-3xl font-semibold">Call Audit</h4>
                                <ul className="space-y-3 mt-q p-10">
                                    <li className="mt-5 text-2xl">Summary</li>
                                    <li className='mt-5 text-2xl'>Data Score</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="text-blue-300 text-3xl font-bold mt-10 pt-5">All Agent</h2>
                                <ul className="text-white p-10">
                                    <li className="mt-5 text-2xl">Summary</li>
                                    <li className='mt-5 text-2xl'>Chat</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <aside className="w-full lg:w-9/12 2xl:w-full h-full overflow-hidden bg-[#fbfaf9]">
                <div className="h-full w-full flex flex-col px-4">
                    <section className="h-fit my-4 mb-8 flex items-start justify-between flex-col sm:flex-row gap-4 xl:gap-x-6">
                        <div className="min-[400px]:grid-cols-2 h-full w-full grid md:grid-cols-4 gap-4">
                            {/* Your content for total calls, invalid calls, etc. */}
                            {/* ... */}
                        </div>
                    </section>
                    <section className="w-full h-full flex justify-center items-center">
                        <h2 className="text-xl font-semibold">
                            Please upload calls for detailed analysis.
                        </h2>
                    </section>
                </div>
            </aside>
        </div>
    </main>
    );
};

export default Salesgpt;


