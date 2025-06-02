// pages/index.tsx
import type { NextPage } from 'next';
import Footer from '../footer/page';
import Head from 'next/head';
import Navbar from '../navbar/page';
import Script from 'next/script';
import { FaCheckCircle } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Head>
        <title>EcoClime Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
      </Head>
      <Script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" strategy="beforeInteractive" />

      <Navbar/>
      {/*Hero Section*/}
      <main className="flex-grow">
        <section className="hero-section text-white py-24 sm:py-36" style={{ background: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1770&q=80') center/cover` }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Empowering Your Farm, Nurturing Our Earth</h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-sm">
              EcoClime delivers AI-powered precision agriculture tools for sustainable farming. Optimize resources, boost yields, and cultivate a healthier planet.
            </p>
            <a href="#" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition duration-150 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Green Revolution
            </a>
          </div>
        </section>
      </main>
        {/* Features Section */}
      <section className="bg-gray-800 py-20 px-6 min-h-[600px]">
  <h2 className="text-2xl font-semibold text-center mb-10">The EcoClime Advantage</h2>
  <div className="grid md:grid-cols-3 gap-8 text-center">
    <div className="bg-gray-700 p-6 rounded-lg min-h-[340px] flex flex-col justify-between">
      <img
        src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=160&q=80"
        alt="Precision Agriculture"
        className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
      />
      <h3 className="text-green-400 font-bold mb-2">Precision Agriculture</h3>
      <p className="text-sm text-gray-300">
        Leverage real-time data and AI for optimized resource management and enhanced crop vitality.
      </p>
    </div>
    <div className="bg-gray-700 p-6 rounded-lg min-h-[340px] flex flex-col justify-between">
      <img
        src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=160&q=80"
        alt="Optimize Resources"
        className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
      />
      <h3 className="text-green-400 font-bold mb-2">Optimize Resources</h3>
      <p className="text-sm text-gray-300">
        Minimize waste and cut costs by applying inputs precisely when and where they’re needed most.
      </p>
    </div>
    <div className="bg-gray-700 p-6 rounded-lg min-h-[340px] flex flex-col justify-between">
      <img
        src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=160&q=80"
        alt="Increase Yields"
        className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
      />
      <h3 className="text-green-400 font-bold mb-2">Increase Yields</h3>
      <p className="text-sm text-gray-300">
        Make data-driven decisions to elevate productivity and harvest quality sustainably.
      </p>
    </div>
  </div>
</section>
{/* Holistic Farm Management Section */}
<section className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
    <div className="relative right-10 bottom-4">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80"
        alt="Farm dashboard"
        className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
        alt="Drone over field"
        className="absolute w-64 h-40 rounded-lg border-4 border-gray-800 shadow-xl -bottom-10 -right-10 hidden md:block object-cover"
      />
    </div>
    <div>
      <h3 className="text-2xl font-semibold text-white mb-4">Holistic Farm Management Platform</h3>
      <p className="text-gray-300 mb-6">
        EcoClime offers a comprehensive suite of intelligent tools. From soil analysis to automated irrigation and pest prediction, we empower you with actionable insights for superior farm performance.
      </p>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-start">
          <FaCheckCircle className="text-emerald-400 mr-2 mt-1" size={22} />
          Smart Sensing: Real-time soil moisture, nutrient levels, and temperature data.
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-emerald-400 mr-2 mt-1" size={22} />
          AI Crop Monitoring: Advanced health diagnostics with satellite and drone imagery.
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-emerald-400 mr-2 mt-1" size={22} />
          Hyperlocal Weather: Personalized, field-specific 7-day forecasts and alerts.
        </li>
        <li className="flex items-start">
          <FaCheckCircle className="text-emerald-400 mr-2 mt-1" size={22} />
          Automated Irrigation: Intelligent scheduling for optimal water usage.
        </li>
      </ul>
      <a
        href="https://www.ibm.com/topics/smart-farming"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-150 shadow-md hover:shadow-lg"
      >
        Explore Features
      </a>
    </div>
  </div>
</section>
        <Footer />
        </div>
  );
};

export default Home;
