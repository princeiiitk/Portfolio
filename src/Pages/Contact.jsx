import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { useState } from 'react';

export default function Contact() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSaveData = () => {
  
    const formData = {
      name: name,
      email: email,
      message: text,
    };

   
    const storedData = JSON.parse(localStorage.getItem("contactData")) || [];

 
    storedData.push(formData);

   
    localStorage.setItem("contactData", JSON.stringify(storedData));
    console.log("Data saved:", storedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveData(); 
    console.log("Form data:", { name, email, message: text });

  
    setText("");
    setName("");
    setEmail("");
  };
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white p-6 sm:p-8 md:p-10 lg:p-12">
        <h2 className="text-3xl font-bold mb-6 text-center animate-fadeIn">Contact Me</h2>
        <p className="mb-6 text-center text-lg animate-fadeIn">
          I would love to hear from you! Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out.
        </p>

        <h3 className="text-2xl font-semibold mb-4 text-center">Contact Information</h3>
        <div className="flex flex-col items-center space-y-6 mb-8">
          {[
            { label: 'LinkedIn', icon: '/src/Asset/Linkedin.png', link: 'https://www.linkedin.com/in/princeiiitk/' },
            { label: 'princekumariiitkota@gmail.com', icon: '/src/Asset/gmail.png', link: '' },
            { label: 'GitHub', icon: '/src/Asset/github.png', link: 'https://github.com/princeiiitk' },
            { label: '+91-7412990676', icon: '/src/Asset/call.png', link:"" }
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 w-full md:w-[30%] h-16 rounded-2xl bg-gray-800 hover:bg-yellow-500 transition transform hover:scale-105 duration-300 shadow-lg"
            >
              <img
                className="w-8 h-8 mx-4 animate-fadeIn"
                src={item.icon}
                alt={item.label}
              />
              <button
                onClick={() => {
                 
                  if (item.link) window.open(item.link, "_blank"); 
                }}
                className="text-white text-lg font-semibold transition duration-200 ease-in-out animate-slideIn hover:text-gray-900"
                style={{ textDecoration: 'none' }}
              >
                { item.label}
              </button>
            </div>
          ))}

        </div>

        <h3 className="text-2xl font-semibold mt-8 text-center">Send a Message</h3>
        <form className="flex flex-col items-center space-y-4 mt-4 w-full md:w-2/3 lg:w-1/2 mx-auto animate-fadeIn">
          <input
            onChange={(e) => { setName(e.target.value)}}
            type="text"
            value={name}
            placeholder="Your Name"
            className="p-3 w-full rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 transform hover:scale-105"
            required
          />
          <input
            onChange={(e)=>{setEmail(e.target.value)}}
            type="email"
            value={email}
            placeholder="Your Email"
            className="p-3 w-full rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 transform hover:scale-105"
            required
          />
          <textarea
            placeholder="Your Message"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}
            className="p-3 w-full rounded border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300 transform hover:scale-105"
            rows="4"
            required
            
          ></textarea>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 text-lg rounded-full transition duration-300 transform hover:bg-yellow-600 hover:scale-110 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
