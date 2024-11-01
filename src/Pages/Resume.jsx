import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import resume from '../Data/Prince-resume.pdf';

export default function Resume() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-900 p-5 shadow-inner">
        <iframe
          src={resume}
          title="Resume"
          className="w-full h-5/6 border-none rounded-lg shadow-lg bg-white"
        />
      </div>
      <Footer />
    </>
  );
}
