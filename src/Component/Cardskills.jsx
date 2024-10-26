import Skills from '../Data/Skills.json';

export default function Card() {
    console.log('Card', Skills);
    const SkillsData = Skills.skillsData;

    return (
        <>
            <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-900">
                {SkillsData.map((idx, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-800 text-white p-6 rounded-xl shadow-lg w-64 md:w-80 transition-transform duration-300 hover:scale-105">
                        <img
                            className="w-full h-50 object-cover shadow-md mb-4"
                            src={idx.img}
                            alt={`Skill ${index}`}
                        />
                        <span className="text-lg text-center">{idx.Description || "No description available."}</span>
                        <div className="mt-4"> 
                            <button className="px-4 py-2 bg-yellow-500 rounded-lg font-semibold transition-colors duration-300 ease-in-out hover:bg-yellow-600">
                                Showcase
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}