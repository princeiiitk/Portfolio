import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import Educationdata from "../Data/Education.json";

export default function Education() {
  const EducationDataArr = Educationdata.Education;

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen p-6 font-sans">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-100">Education</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {EducationDataArr.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-gray-800 border border-gray-700 rounded-xl shadow-xl p-6 hover:scale-105 transform transition duration-300 ease-in-out space-x-0 md:space-x-6 space-y-6 md:space-y-0" // Use flex-col for small screens and flex-row for medium screens
            >
              <img
                src={item.img}
                alt="education logo"
                className="w-20 h-20 object-cover rounded-lg shadow-md" 
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
                <p className="text-gray-300 text-md font-light leading-relaxed">{item.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
