import React from 'react';
import { Camera, Heart, Star, Coffee, Globe, Moon } from 'lucide-react';

/**
 * Individual Card Component
 * - flex flex-col: Stacks children vertically
 * - items-center: Centers the image/icon
 * - text-center: Centers the text content
 */
const Card = ({ title, subtitle, icon: Icon, bgColor }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
    {/* 1. Image Area (using Lucide icons as placeholders) */}
    <div className={`${bgColor} p-4 rounded-full mb-6`}>
      <Icon size={32} className="text-white" />
    </div>

    {/* 2. Heading */}
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      {title}
    </h3>

    {/* 3. Subheading */}
    <p className="text-gray-500 text-sm leading-relaxed">
      {subtitle}
    </p>
  </div>
);

export default function Services() {
  // Data for the 6 boxes
  const cardData = [
    { id: 1, title: "Express  & Standard Delivery", subtitle: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.  Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.", icon: Camera, bgColor: "bg-blue-500" },
    { id: 2, title: "Nationwide Delivery", subtitle: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.", icon: Heart, bgColor: "bg-red-500" },
    { id: 3, title: "Fulfillment Solution", subtitle: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.", icon: Star, bgColor: "bg-yellow-500" },
    { id: 4, title: "Cash on Home Delivery", subtitle: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.", icon: Coffee, bgColor: "bg-amber-700" },
    { id: 5, title: "Corporate Service / Contract In Logistics", subtitle: "Customized corporate services which includes warehouse and inventory management support.", icon: Globe, bgColor: "bg-indigo-500" },
    { id: 6, title: "Parcel Return", subtitle: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.", icon: Moon, bgColor: "bg-slate-800" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-[1100px] mx-auto bg-[#03464D] px-[100px] py-[50px] rounded-2xl">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Survices
          </h1>
          <p className="mt-4 text-gray-400">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* The Grid Container:
            - grid: Enables CSS Grid
            - grid-cols-1: 1 box per row on mobile
            - md:grid-cols-3: 3 boxes per row on medium screens (and up)
            - gap-8: Space between the boxes
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {cardData.map((item) => (
            <Card 
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}