import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Data from '../Data/Data.json';

export default function About() {
  const about = Data.data;
  console.log(about);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center bg-gray-900 p-6">
     
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mb-10 bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img
              className="w-full h-auto rounded-full border-4 border-purple-500"
              src="/src/Asset/prince.jpg"
              alt="Prince"
            />
          </div>
          <div className="md:w-2/3 text-center md:text-left md:pl-4">
            <h2 className="text-2xl text-white font-bold mb-2">About Me</h2>
            <p className="text-gray-300 mb-4">{about.Objective}</p>
          </div>
        </div>

        
        <h3 className="text-xl text-white font-semibold mb-4">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        
          <div className="flex flex-col items-center">
            <img src="/src/Asset/leetcode.png" alt="LeetCode Logo" className="w-16 h-16 mb-2" />
            <button
              className="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-yellow-600 hover:text-white shadow-md"
              onClick={() => {}}
            >
              LeetCode Profile
            </button>
          </div>

       
          <div className="flex flex-col items-center">
            <img src="/src/Asset/GFG.jpg" alt="GFG Logo" className="w-16 h-16 mb-2" />
            <button
              className="bg-green-500 text-gray-900 font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-green-600 hover:text-white shadow-md"
              onClick={() =>{} }
            >
              GFG Profile
            </button>
          </div>

          <div className="flex flex-col items-center">
            <img src="/src/Asset/Hackerrank.png" alt="HackerRank Logo" className="w-16 h-16 mb-2" />
            <button
              className="bg-blue-500 text-gray-900 font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-blue-600 hover:text-white shadow-md"
              onClick={() => {} }
            >
              HackerRank Profile
            </button>
          </div>

          <div className="flex flex-col items-center">
            <img src="/src/Asset/12thBoard.jpg" alt="12th Board Achievements" className="w-16 h-16 mb-2" />
            <button
              className="bg-purple-500 text-gray-900 font-semibold px-4 py-2 rounded-full transition duration-300 hover:bg-purple-600 hover:text-white shadow-md"
              onClick={() => {} }
            >
              12th Board
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
