export default function Navbar() {
  return (
    <header
      className="bg-gray-800 px-6 py-4 flex justify-between items-center"
      style={{ fontFamily: "'Noto Sans', 'Space Grotesk', sans-serif" }}
    >
      <div className="flex items-center space-x-2">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=40&q=80"
          alt="EcoClime Logo"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-green-400 font-bold text-2xl">EcoClime</span>
      </div>
      <nav className="flex space-x-10 text-xl">
        <a
          href="#"
          className="hover:text-green-400 transition-all duration-200 hover:text-2xl"
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-green-400 transition-all duration-200 hover:text-2xl"
        >
          Crop Advisor
        </a>
        {/* <a
          href="#"
          className="hover:text-green-400 transition-all duration-200 hover:text-2xl"
        >
          Input Calculator
        </a> */}
        <a
          href="#"
          className="hover:text-green-400 transition-all duration-200 hover:text-2xl"
        >
          Crop Disease
        </a>
        {/* <a
          href="#"
          className="hover:text-green-400 transition-all duration-200 hover:text-2xl"
        >
          Farm overview
        </a> */}
        <a
          href="#"
          className="hover:text-green-400 transition-all duration-200 hover:text-2xl"
        >
          Chatbot
        </a>
      </nav>
      <button className="bg-green-400 text-black px-4 py-1 rounded text-lg hover:bg-green-800 transition-all duration-200 ">Sign Up</button>
    </header>
  );
}
