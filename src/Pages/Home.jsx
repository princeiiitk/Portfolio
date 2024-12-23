import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Data from '../Data/Data.json';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const Navigate = useNavigate();

  const HandleBtn = (text) => {
    if (text === "Skills") {
      Navigate("/Skills");
    } else if (text === "Projects") {
      Navigate("/Projects");
    } else if (text === "About") {
      Navigate("/About");
    } else if (text === "Contact") {
      Navigate("/Contact");
    } else if (text === "Education") {
      Navigate("/Education");
    }
  };

  const HandleShowcase = () => {
    Navigate("/CurrentWork");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-900 min-h-screen text-white">
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-8 p-6 md:p-8 bg-gray-800 shadow-xl rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 mx-4 animate-fade-in">
          
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              className="w-[70%] md:w-[90%] h-auto rounded-lg transform transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-2 shadow-lg"
              src="../../Asset/prince.jpg"
              alt="Prince's Profile"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-4">
              {Data.data.Objective}
            </p>
            <div className="flex-col md:flex-row items-center justify-center md:justify-start gap-4 mt-4 hidden md:flex">
              {["Skills", "Projects", "About", "Contact", "Education"].map((text) => (
                <button
                  onClick={() => { HandleBtn(text); }}
                  key={text}
                  className="w-full md:w-auto px-4 py-2 bg-blue-600 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-blue-700 shadow-md transform hover:scale-105 hover:-translate-y-1"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-12 p-6 md:p-8 bg-gray-800 shadow-xl rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 mx-4 animate-slide-up">
          
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Explore My Ongoing Projects and Work
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-4">
              {Data.data.OngoingWork}
            </p>
            <button onClick={HandleShowcase} className="mt-4 w-full md:w-auto px-4 py-2 bg-green-600 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-green-700 shadow-md transform hover:scale-105 hover:-translate-y-1">
              Showcase
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <img
              className="w-[70%] md:w-[90%] h-auto rounded-lg transform transition-transform duration-700 ease-in-out hover:scale-110 hover:rotate-2 shadow-lg"
              src="../../Asset/prince.jpg"
              alt="Prince's Profile"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
