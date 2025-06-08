import React from 'react';
import { LayoutDashboard, Leaf, Calculator, Bell, Map, Settings, LogOut, ArrowLeft } from 'lucide-react';

// Define a type for crop data
interface Crop {
  id: string;
  name: string;
  image: string;
  estimatedProfit: string;
  riskAssessment: string;
}

// CropCard Component
const CropCard: React.FC<{ crop: Crop }> = ({ crop }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-105">
      <img
        src={crop.image}
        alt={crop.name}
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/400x200/2C3E50/E0F2F7?text=${crop.name}`;
          e.currentTarget.onerror = null;
        }}
      />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-white mb-2">{crop.name}</h3>
        <p className="text-gray-300 text-sm mb-1">
          Estimated Profit: <span className="font-medium text-green-400">{crop.estimatedProfit}</span>
        </p>
        <p className="text-gray-300 text-sm mb-4">
          Risk Assessment: <span className="font-medium text-yellow-400">{crop.riskAssessment}</span>
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 w-full">
          View Details
        </button>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-gray-900 text-gray-200 flex flex-col p-6 min-h-screen">
      <div className="text-2xl font-bold text-white mb-10">AgriTech Platform</div>
      <nav className="flex-grow">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <LayoutDashboard size={20} className="mr-3" />
              Dashboard
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-lg bg-green-600 text-white">
              <Leaf size={20} className="mr-3" />
              Crop Advisor
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Calculator size={20} className="mr-3" />
              Input Calculator
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Bell size={20} className="mr-3" />
              Alerts
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Map size={20} className="mr-3" />
              Maps
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <Settings size={20} className="mr-3" />
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              <LogOut size={20} className="mr-3" />
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

// CropSelectionTool Component
const CropSelectionTool: React.FC = () => {
  const crops: Crop[] = [
    {
      id: 'rice',
      name: 'Rice',
      image: 'https://placehold.co/400x200/2C3E50/E0F2F7?text=Rice+Field',
      estimatedProfit: '₹50,000',
      riskAssessment: '3/5',
    },
    {
      id: 'wheat',
      name: 'Wheat',
      image: 'https://placehold.co/400x200/2C3E50/E0F2F7?text=Wheat+Field',
      estimatedProfit: '₹45,000',
      riskAssessment: '2/5',
    },
    {
      id: 'corn',
      name: 'Corn',
      image: 'https://placehold.co/400x200/2C3E50/E0F2F7?text=Corn+Field',
      estimatedProfit: '₹60,000',
      riskAssessment: '3/5',
    },
    {
      id: 'soybeans',
      name: 'Soybeans',
      image: 'https://placehold.co/400x200/2C3E50/E0F2F7?text=Soybean+Field',
      estimatedProfit: '₹55,000',
      riskAssessment: '2/5',
    },
  ];

  return (
    <div className="flex-1 bg-gray-800 p-8 text-gray-100 min-h-screen">
      <div className="flex items-center mb-8">
        <ArrowLeft size={24} className="mr-4 text-gray-400 cursor-pointer" />
        <h1 className="text-3xl font-bold text-white">Crop Selection Tool</h1>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Current Season Analysis</h2>
        <p className="text-gray-300 leading-relaxed">
          Based on the current season, soil conditions, climate data, and historical yields, here are the AI-powered recommendations for the best crops to plant:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {crops.map((crop) => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  return (
    <div className="flex font-inter">
      <Sidebar />
      <CropSelectionTool />
    </div>
  );
};

export default App;
