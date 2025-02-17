import React from 'react';

interface PromoBannerProps {
    title: string;
    description: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ title, description }) => {
    return (
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-800">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
};

export default PromoBanner;
