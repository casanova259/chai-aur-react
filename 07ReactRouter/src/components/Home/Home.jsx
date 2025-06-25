import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
            {/* Hero Image - Left Side */}
            <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-center">
                <img 
                    className="max-w-m max-h-m object-contain drop-shadow-2xl " 
                    src="https://images.pexels.com/photos/29536485/pexels-photo-29536485.jpeg" 
                    alt="Remote control device" 
                />
            </div>

            {/* Content - Right Side */}
            <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
                <div className="text-center space-y-8 px-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Download Now
                        <span className="block text-2xl md:text-4xl mt-2">Lorem Ipsum</span>
                    </h2>

                    <button
                        className="inline-flex text-white items-center px-8 py-4 font-medium bg-orange-700 rounded-lg hover:bg-orange-800 transition-colors duration-300"
                    >
                        <svg
                            fill="white"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        <span className="ml-2">Download now</span>
                    </button>
                </div>
            </div>

            {/* Bottom Image - Centered */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
                <img 
                    className="w-32 md:w-48 h-auto object-fill" 
                    src="https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg" 
                    alt="Remote control showcase" 
                />
            </div>

            {/* Title at Bottom */}
            <div className="absolute bottom-4 left-0 w-full text-center">
                <h1 className="text-2xl md:text-3xl font-medium text-gray-900">Lorem Ipsum Yojo</h1>
            </div>
        </div>
    );
}