import { useParams } from 'react-router-dom';
import SkillShowcaseData from '../Data/SkillShowcase.json';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

export default function SkillShowcase() {
   
    const { id } = useParams();
   
    const [Skills] = SkillShowcaseData.SkillShowcaseData.filter(proj => proj.id === Number(id));
 
    return (
        <>
            <Navbar />
            <div className='bg-gray-900 min-h-screen'>
                <div className="text-center py-10">
                    <h1 className="text-white text-5xl font-bold mb-4 relative inline-block">
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transform -translate-x-1 -translate-y-1 blur-md"></span>
                        <span className="relative">Skills Showcase</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-sans">
                    
                        Explore Our Expertise!
                    </p>
                </div>
                <div className="bg-gray-800 p-6 md:p-8 text-white rounded-lg shadow-2xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-xl "> {/* Adjusted padding for mobile and desktop */}
                    <div className="flex flex-col items-center space-y-6">

                        {Skills?.imglogo && (
                            <img
                                src={Skills.imglogo}
                                alt={`Project ${Skills.id}`}
                                className="w-32 h-32 md:w-48 md:h-48 rounded-lg transform hover:scale-105 transition duration-500 shadow-lg mb-4"
                            />
                        )}


                        <div className="flex flex-col items-center">
                            {Skills?.gitimg && (
                                <img
                                    src={Skills.gitimg}
                                    className="w-12 h-12 mb-2 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
                                    alt="GitHub logo"
                                />
                            )}
                            <button
                                onClick={() => window.open(Skills?.githublink || '#', '_blank')}
                                className="bg-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full mt-2 transition duration-300 hover:bg-yellow-600 hover:text-white shadow-md transform hover:scale-105"
                            >
                                View on GitHub
                            </button>
                        </div>

                       

                        <div className="text-center max-w-lg mx-auto font-sans">
                            <p className="text-lg mt-4 leading-relaxed font-sans">
                                {Skills.Description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
