import React from 'react';
import { Package, Truck, Store } from 'lucide-react';


const ServiceCard = ({ Icon, heading, subHeading }) => {
  return (
    <div className="flex flex-col items-start p-8 bg-white border border-slate-100 shadow-sm rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-indigo-100 hover:-translate-y-1">
      {/* Icon Container with a soft background circle */}
      <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-indigo-50 text-indigo-600">
        <Icon size={28} strokeWidth={1.5} />
      </div>

      {/* Text Content */}
      <h3 className="mb-3 text-xl font-bold text-slate-900">
        {heading}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {subHeading}
      </p>

      {/* Optional action link for better UI feel */}
      <button className="mt-6 text-sm font-semibold text-indigo-600 hover:underline">
        Get Started
      </button>
    </div>
  );
};

export default function Work() {
  // We store the data in an array to keep the main JSX clean and "human-understandable"
  const services = [
    {
      Icon: Package,
      heading: "Booking Pick & Drop",
      subHeading: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      Icon: Truck,
      heading: "Cash On Delivery",
      subHeading: "From personal packages to business shipments — we deliver on time, every time."
    },
    {
      Icon: Store,
      heading: "Delivery Hub",
      subHeading: "From personal packages to business shipments — we deliver on time, every time."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            How it Works
          </h1>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* The Grid: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, index) => (
            <ServiceCard 
              key={index}
              Icon={item.Icon}
              heading={item.heading}
              subHeading={item.subHeading}
            />
          ))}
        </div>
      </div>
    </div>
  );
}