import { Link } from "react-router-dom";
const ProfileCard = ({ name, title, img, style, bgClass = "bg-white", shadowClass = "shadow-2xl" }) => (
    <div 
        className={`absolute p-2 ${bgClass} rounded-lg ${shadowClass} transform hover:scale-105 transition duration-300`}
        style={style}
    >
        <div className="w-36 h-36 md:w-48 md:h-48 overflow-hidden rounded-lg">
            <img src={img} alt={name} className="w-full h-full object-cover rounded-md" />
        </div>

    </div>
);


export default function LandingPage() {

    const heroGradientStyle = {
        background: 'linear-gradient(290deg, #5c74a0 0%, #30476e 50%, #9a5f4c 100%)',
        position: 'relative',
        overflow: 'hidden',
    };

    return (
        <div className="min-h-[70vh] relative">

            <div 
                className="w-full pt-16 pb-24 lg:pt-24 lg:pb-32 relative text-white" 
                style={heroGradientStyle}
            >
                                <div className="w-4/5 mx-auto flex relative z-10">
                    <div className="w-[45%] pr-10">
                        <h1 className="text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                            AI Integrated <br/> Learning from <br/> Working Pros
                        </h1>
                        <p className="text-base text-gray-200 mb-10 pr-10">
                            Join India's leading platform dedicated to realizing professional dreams and fostering growth for businesses and educational institutions.
                        </p>

                        {/* Buttons */}
                        <div className="flex space-x-4">
                            <Link
                                to="/contact"
                                className="flex items-center bg-white text-gray-800 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-200"
                            >
                                Get in touch 
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </Link>
                            <Link
                                to="/courses"
                                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-800 transition duration-200"
                            >
                                Talk to Us
                            </Link>
                        </div>
                    </div>

                    <div className="w-[55%] relative flex justify-center items-center" style={{ minHeight: '400px' }}>
                        
                        <div className="relative w-full h-full">
                            <ProfileCard 
                                img="/public/landingIMG/keerthi.png" 
                                style={{ top: '0', right: '0', transform: 'translateY(-20%)' }} 
                                bgClass="bg-transparent"
                                shadowClass="shadow-none"
                            />                            
                            <ProfileCard  
                                img="/public/landingIMG/shahana.png" 
                                style={{ top: '35%', left: '25%', transform: 'translate(-50%, -50%)'}} 
                                bgClass="bg-transparent"
                                shadowClass="shadow-none"
                            />
                            <ProfileCard 
                                img="/public/landingIMG/sneha.png" 
                                style={{ bottom: '0', right: '0', transform: 'translateY(10%)' }} 
                                bgClass="bg-transparent"
                                shadowClass="shadow-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="fixed bottom-4 left-4 z-50">
                    <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition duration-200">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        Chat with us
                    </button>
                </div>
            </div>

            <div className="w-4/5 mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-800">Featured Courses</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">Course Card 1</div>
                    <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">Course Card 2</div>
                    <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">Course Card 3</div>
                </div>
            </div>

        </div>
    );
}