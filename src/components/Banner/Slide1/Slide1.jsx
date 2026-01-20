import React from 'react';
import B1 from '../../../assets/big-deliveryman.png'
const Slide1 = () => {
    return (
        // Main container - full width with light gray background
    <div className="max-w-[1150px] mx-auto bg-gray-50 py-16 px-8 rounded">
      
      {/* Content wrapper - centers content and sets max width */}
      <div className="max-w-6xl mx-auto">
        
        {/* Grid layout - 2 columns on desktop, 1 column on mobile */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE - Text Content */}
          <div className="space-y-6">
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {/* "Fastest" in dark color */}
              <span className="text-gray-900">Fastest</span>
              <br />
              {/* "Delivery" in green/lime color */}
              <span className="text-lime-500">Delivery</span>
              {/* " & Easy" in dark color */}
              <span className="text-gray-900"> & Easy</span>
              <br />
              {/* "Pickup" in green/lime color */}
              <span className="text-lime-500">Pickup</span>
            </h1>

            {/* Description paragraph */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
              Enjoy fast, reliable parcel delivery right at your door, from tracking and easy 
              pick-up, from personal packages to business shipments – we deliver on time, every time.
            </p>

            {/* Buttons container */}
            <div className="flex flex-wrap gap-4 pt-4">
              
              {/* Primary button - Track Parcel */}
              <button className="flex items-center gap-3 bg-lime-500 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors">
                <span>Track Your Parcel</span>
                {/* Arrow icon */}
                <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg 
                    className="w-3 h-3 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </button>

              {/* Secondary button - Be a Rider */}
              <button className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                Be A Rider
              </button>
            </div>

          </div>

          {/* RIGHT SIDE - Illustration */}
          <div className="relative flex justify-center items-center">
            
            {/* Decorative dashed line behind scooter */}
            <div className="absolute left-0 top-1/2 w-24 border-t-2 border-dashed border-gray-400"></div>

            {/* Scooter Illustration Container */}
            <div className="relative">
              
              {/* Simple scooter illustration using SVG */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-auto max-w-md"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Delivery box on back of scooter */}
                <rect x="120" y="100" width="60" height="50" fill="#9ACD32" rx="4"/>
                <rect x="125" y="105" width="50" height="15" fill="#7CB342"/>
                
                {/* Scooter body */}
                <ellipse cx="280" cy="220" rx="40" ry="40" fill="#4B5563"/>
                <ellipse cx="280" cy="220" rx="25" ry="25" fill="#E5E7EB"/>
                
                <ellipse cx="160" cy="220" rx="40" ry="40" fill="#4B5563"/>
                <ellipse cx="160" cy="220" rx="25" ry="25" fill="#E5E7EB"/>
                
                {/* Scooter frame */}
                <path d="M160 220 L220 180 L260 180 L280 220" stroke="#7CB342" strokeWidth="12" fill="none"/>
                <rect x="200" y="150" width="80" height="40" fill="#9ACD32" rx="8"/>
                
                {/* Handlebars */}
                <line x1="220" y1="180" x2="220" y2="140" stroke="#4B5563" strokeWidth="8"/>
                <line x1="200" y1="140" x2="240" y2="140" stroke="#4B5563" strokeWidth="6"/>
                
                {/* Rider - Head */}
                <circle cx="200" cy="100" r="25" fill="#9ACD32"/>
                {/* Face */}
                <circle cx="205" cy="95" r="18" fill="#FDE68A"/>
                <circle cx="210" cy="90" r="3" fill="#1F2937"/>
                <path d="M205 100 Q210 105 215 100" stroke="#1F2937" strokeWidth="2" fill="none"/>
                
                {/* Rider - Body */}
                <ellipse cx="200" cy="150" rx="30" ry="40" fill="#9ACD32"/>
                
                {/* Rider - Arms */}
                <path d="M180 140 Q190 145 210 135" stroke="#9ACD32" strokeWidth="12" fill="none"/>
                
                {/* Rider - Legs */}
                <ellipse cx="190" cy="180" rx="15" ry="30" fill="#4B5563"/>
                <ellipse cx="210" cy="190" rx="12" ry="25" fill="#4B5563"/>
                <path d="M210 210 L240 200" stroke="#4B5563" strokeWidth="10"/>
                
                {/* Motion lines for speed effect */}
                <line x1="80" y1="120" x2="110" y2="120" stroke="#D1D5DB" strokeWidth="3" strokeDasharray="8 4"/>
                <line x1="90" y1="145" x2="120" y2="145" stroke="#D1D5DB" strokeWidth="3" strokeDasharray="8 4"/>
                <line x1="100" y1="170" x2="130" y2="170" stroke="#D1D5DB" strokeWidth="3" strokeDasharray="8 4"/>
              </svg>

            </div>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Slide1;