import React from 'react';
import Container from '../../components/container/Container'; 
import FeaturedProducts from './FeaturedProducts';
import PromoBanner from './PromoBanner';
import { Link } from 'react-router-dom';
import Intro from '../../assets/intro.jpg';

const HomePage: React.FC = () => {
    return (
        <Container>
            {/* Header */}
            <header className="text-center p-8 bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to OnlineShop</h1>
                <p className="text-lg text-gray-600 mt-2">Your one-stop shop for everything!</p>
            </header>
            
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center bg-blue-50 p-10 rounded-lg shadow-lg">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-blue-800">Discover Amazing Deals</h2>
                    <p className="text-lg text-gray-700 mt-4">Explore our range of products at unbeatable prices.</p>
                    <Link to={`/store`}><button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                        Shop Now
                    </button></Link>
                </div>
                <div className="md:w-1/2 mt-3 md:mt-0">
                    <img className="w-full max-w-l mx-auto " src= {Intro} alt="Shopping banner" />
                </div>
            </section>
             {/* Featured Products */}
            <section className="p-8 mt-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Featured Products</h2>
                <FeaturedProducts />
            </section>

            {/* Promo Banners */}
            <section className="flex flex-col md:flex-row justify-around gap-4 p-8 mt-6">
                <PromoBanner title="Free Shipping" description="On all orders over $50" />
                <PromoBanner title="New Arrivals" description="Check out the latest products" />
                <PromoBanner title="Limited Time Offer" description="Up to 50% off selected items" />
            </section>
            

        </Container>
    );
};

export default HomePage;
