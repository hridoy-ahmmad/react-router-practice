import React from 'react';

const About = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            {/* Hero Section */}
            <section className="bg-green-50 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
                        We Bring Nature to Your <span className="text-green-600">Doorstep</span>
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Welcome to our green sanctuary. We are dedicated to providing high-quality plants and trees
                        that transform your living spaces into vibrant, breathing environments. Our mission is to
                        make the world greener, one plant at a time.
                    </p>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-600">5000+</h3>
                            <p className="text-gray-500 font-medium">Trees Planted</p>
                        </div>
                        <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-600">1200+</h3>
                            <p className="text-gray-500 font-medium">Happy Clients</p>
                        </div>
                        <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
                            <h3 className="text-3xl font-bold text-green-600">50+</h3>
                            <p className="text-gray-500 font-medium">Plant Varieties</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission & Vision */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=800"
                            alt="Our Mission"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-gray-600 mb-6 italic">
                            "To create a world where every home has its own mini-forest, fostering a healthier
                            and more sustainable lifestyle for future generations."
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="bg-green-100 p-2 rounded-lg h-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-700">Sustainable Sourcing</h4>
                                    <p className="text-sm text-gray-500">We only work with eco-friendly nurseries and organic fertilizers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-green-100 p-2 rounded-lg h-fit">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-700">Expert Advice</h4>
                                    <p className="text-sm text-gray-500">Our plant specialists are always ready to help you with care tips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-900 py-16 text-center text-white mt-10">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Your Garden?</h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                    Explore our collection and find the perfect tree that fits your space and lifestyle.
                </p>
                <button className="btn btn-primary btn-lg rounded-full px-10">Get Started</button>
            </section>
        </div>
    )
};

export default About;