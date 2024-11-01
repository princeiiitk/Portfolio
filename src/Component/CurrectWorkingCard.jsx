import Currentwork from '../Data/CurrentData.json';

export default function CurrectWorkingCard() {
    const work = Currentwork.CurrentData;

    return (
        <>
            <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-900 text-white px-4 py-10 space-y-8 md:space-y-0 md:space-x-8">
                {/* First Card */}
                <div className="w-full sm:w-96 md:w-2/5 lg:w-1/3 xl:w-1/3 max-w-md rounded-lg p-6 shadow-2xl flex flex-col items-center space-y-8 bg-gray-800 transform transition-transform hover:scale-105">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4 font-sans">Current Work</h1>
                    <p className="text-sm md:text-base text-center max-w-xs font-sans">
                        I am currently working on a bank management system.
                    </p>

                    <div className="flex flex-col items-center w-full space-y-4">
                        <div className="w-3/4 flex justify-center">
                            <img
                                className="rounded-lg shadow-lg"
                                src={work[0].imgMern}
                                alt="MERN stack illustration"
                            />
                        </div>

                        <div className="w-full flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4 w-full">
                                <img className="w-10 h-10 rounded-lg shadow-md" src={work[0].imggit} alt="GitHub" />
                                <button onClick={() => window.open('https://github.com/princeiiitk/Bank-Management-MERN',"_blank")} className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                                    GitHub
                                </button>
                            </div>

                            <div className="flex items-center space-x-4 w-full">
                                <img className="w-10 h-10 rounded-lg shadow-md" src={work[0].imgdata} alt="Data Modeling" />
                                <button onClick={() => window.open('https://app.eraser.io/workspace/mfVv2IEdA6A3MQOSiLyI', "_blank")}  className="bg-gradient-to-r from-yellow-500 via-green-500 to-teal-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                                    Data Modeling
                                </button>
                            </div>
                            <div className="flex items-center space-x-4 w-full">
                                <img className="w-10 h-10 rounded-lg shadow-md" src={work[0].imggit} alt="GitHub" />
                                <button onClick={() => window.open('https://github.com/princeiiitk/Bank-Management-System', "_blank")} className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                                    GitHub C++ Code
                                </button>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-sm md:text-base font-sans">{work[0].Description}</p>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="w-full sm:w-96 md:w-2/5 lg:w-1/3 xl:w-1/3 max-w-md rounded-lg p-6 shadow-2xl flex flex-col items-center space-y-8 bg-gray-800 transform transition-transform hover:scale-105">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4 font-sans">Current Work</h1>
                    <p className="text-sm md:text-base text-center max-w-xs font-sans">
                        I solve DSA problems daily.
                    </p>

                    <div className="flex flex-col items-center w-full space-y-4">
                        <div className="w-3/4 flex justify-center">
                            <img className="rounded-lg shadow-lg" src={work[1].imgDSA} alt="DSA" />
                        </div>

                        <div className="w-full flex flex-col items-center space-y-4">
                            <div className="flex items-center space-x-4 w-full">
                                <img className="w-10 h-10 rounded-lg shadow-md" src={work[1].imggit} alt="GitHub" />
                                <button onClick={() => window.open('https://github.com/princeiiitk', "_blank")} className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                                    Check GitHub
                                </button>
                            </div>
                            <div className="flex items-center space-x-4 w-full">
                                <img className="w-10 h-10 rounded-lg shadow-md" src={work[1].imgleet} alt="LeetCode" />
                                <button onClick={() => window.open('https://leetcode.com/u/princeiiitk/', "_blank")} className="bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                                    LeetCode
                                </button>
                            </div>
                            <div className="flex items-center space-x-4 w-full">
                                <img className="w-10 h-10 rounded-lg shadow-md" src={work[1].imgGFG} alt="GFG" />
                                <button onClick={() => window.open('https://www.geeksforgeeks.org/user/princekumah8kh/',"_blank")} className="bg-gradient-to-r from-green-500 via-yellow-500 to-teal-500 text-white py-2 px-4 w-full rounded-md shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
                                    GFG
                                </button>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-sm md:text-base font-sans">{work[1].Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
