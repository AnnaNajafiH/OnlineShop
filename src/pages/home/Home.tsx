import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import PromoBanner from './PromoBanner';


const HomePage: React.FC = () => {
    return (
        <div className="font-sans">
            {/* Header */}
            <header className="text-center p-8 bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to ShopEasy</h1>
                <p className="text-lg text-gray-600 mt-2">Your one-stop shop for everything!</p>
            </header>
            
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center bg-blue-50 p-10">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-900">Discover Amazing Deals</h2>
                    <p className="text-lg text-gray-700 mt-4">Explore our range of products at unbeatable prices.</p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Shop Now
                    </button>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    <img className="w-full max-w-lg mx-auto rounded-lg shadow-lg" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/102897423/original/1e94566de4d632afa588363c05a752cefe218e01/design-creative-professional-shopping-website-banners.jpg" alt="Shopping banner" />
                </div>
            </section>
            
            {/* Promo Banners */}
            <section className="flex flex-col md:flex-row justify-around gap-4 p-8 bg-gray-50">
                <PromoBanner title="Free Shipping" description="On all orders over $50" />
                <PromoBanner title="New Arrivals" description="Check out the latest products" />
                <PromoBanner title="Limited Time Offer" description="Up to 50% off selected items" />
            </section>
            
            {/* Featured Products */}
            <section className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
                <FeaturedProducts />
            </section>
        </div>
    );
};

export default HomePage;
