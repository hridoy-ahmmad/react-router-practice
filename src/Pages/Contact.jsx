import React from 'react';

const Contact = () => {
    return (
        <div className="bg-base-100 min-h-screen py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Get in <span className="text-green-600">Touch</span></h1>
                    <p className="text-gray-500 max-w-lg mx-auto">
                        Have questions about our plants or need gardening advice? Drop us a message, and our team will get back to you within 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
                            <div className="bg-green-100 p-4 rounded-xl text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700">Email Us</h4>
                                <p className="text-gray-500">support@greenearth.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
                            <div className="bg-green-100 p-4 rounded-xl text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700">Our Location</h4>
                                <p className="text-gray-500">Dhaka, Bangladesh</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-white shadow-sm border border-gray-100 rounded-2xl">
                            <div className="bg-green-100 p-4 rounded-xl text-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-700">Phone</h4>
                                <p className="text-gray-500">+880 1234 567890</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card bg-white shadow-xl p-8 border border-gray-100">
                        <form className="space-y-4">
                            <div className="form-control">
                                <label className="label font-semibold">Full Name</label>
                                <input type="text" placeholder="John Doe" className="input input-bordered focus:border-green-500 focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Email Address</label>
                                <input type="email" placeholder="example@mail.com" className="input input-bordered focus:border-green-500 focus:outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label font-semibold">Message</label>
                                <textarea className="textarea textarea-bordered h-32 focus:border-green-500 focus:outline-none" placeholder="How can we help?"></textarea>
                            </div>
                            <button className="btn btn-primary w-full mt-4 shadow-lg hover:shadow-xl">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;