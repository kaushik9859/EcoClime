import { FaLeaf, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800 w-full">
      <div className="w-full max-w-none px-4 sm:px-12 lg:px-32 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-2">
          <FaLeaf className="text-green-400 text-2xl" />
          <span className="text-xl font-bold text-green-400">EcoClime</span>
        </div>
        <p className="text-sm mb-1 ">&copy; {new Date().getFullYear()} EcoClime. All rights reserved.</p>
        <p className="text-xs mb-4">Empowering Your Farm, Nurturing Our Earth</p>
        <div className="flex gap-4 mb-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaTwitter />
          </a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
            <FaInstagram />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-green-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-green-400 transition">Terms of Service</a>
          <a href="#" className="hover:text-green-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}