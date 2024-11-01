import { useParams } from 'react-router-dom';
import ProjectShowcaseData from '../Data/ProjectShowcaseData.json';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

export default function ProjectShowcase() {
    const { id } = useParams();
    const [project] = ProjectShowcaseData.ProjectShowcaseData.filter(proj => proj.id === Number(id));

    return (
        <>
            <Navbar />
            <div className='bg-gray-900 min-h-screen'> 
                <div className="text-center py-10">
                    <h1 className="text-white text-5xl font-bold mb-4 relative inline-block">
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transform -translate-x-1 -translate-y-1 blur-md"></span>
                        <span className="relative">Project Showcase</span>
                    </h1>
                    <p className="text-gray-300 text-lg font-sans">
                        Discover the amazing projects. Click below to explore!
                    </p>
                </div>
                <div className="bg-gray-800 p-6 md:p-8 text-white rounded-lg shadow-2xl max-w-2xl mx-auto transition-all duration-300 hover:shadow-xl "> {/* Adjusted padding for mobile and desktop */}
                    <div className="flex flex-col items-center space-y-6">

                        {project?.imglogo && (
                            <img
                                src={project.imglogo}
                                alt={`Project ${project.id}`}
                                className="w-32 h-32 md:w-48 md:h-48 rounded-lg transform hover:scale-105 transition duration-500 shadow-lg mb-4"
                            />
                        )}

                     
                        <div className="flex flex-col items-center">
                            {project?.gitimg && (
                                <img
                                    src={project.gitimg}
                                    className="w-12 h-12 mb-2 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
                                    alt="GitHub logo"
                                />
                            )}
                            <button
                                onClick={() => window.open(project?.githublink || '#', '_blank')}
                                className="bg-green-600 text-gray-900 font-semibold px-6 py-2 rounded-full mt-2 transition duration-300 hover:bg-yellow-600 hover:text-white shadow-md transform hover:scale-105"
                            >
                                View on GitHub
                            </button>
                        </div>

                        <div className="flex flex-col items-center">
                            {project?.Deploymentlogo && (
                                <img
                                    src={project.Deploymentlogo}
                                    className="w-12 h-12 mb-2 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
                                    alt="Deployment logo"
                                />
                            )}
                            <button
                                onClick={() => window.open(project?.livelink || '#', '_blank')}
                                className="bg-green-500 text-gray-900 font-semibold px-6 py-2 rounded-full mt-2 transition duration-300 hover:bg-green-600 hover:text-white shadow-md transform hover:scale-105"
                            >
                                Live Deployment
                            </button>
                        </div>

                        <div className="text-center max-w-lg mx-auto font-sans">
                            <p className="text-lg mt-4 leading-relaxed font-sans">
                               {project.Description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
