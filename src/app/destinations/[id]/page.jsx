import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NotDataAnimation from '@/components/NoDataAnimation';

const DestinationsDetailsPage = async ({ params }) => {
    const { id } = await params;

    // Fetch the specific destination by ID
    const res = await fetch(`http://localhost:5000/destinations/${id}`, {
        cache: 'no-store'
    });

    if (!res.ok) {
        return (
            <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
                <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
                    <NotDataAnimation />
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2 mt-4">Destination Not Found</h3>
                    <p className="text-gray-500 mb-6">The destination you are looking for does not exist or has been removed.</p>
                    <Link href="/destinations" className="inline-block bg-linear-to-r from-cyan-600 to-cyan-500 text-white font-semibold py-2 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                        Back to Destinations
                    </Link>
                </div>
            </div>
        );
    }

    const destination = await res.json();

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
            {/* Hero Section with Image */}
            <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        src={destination.imageUrl}
                        alt={destination.destinationName}
                        fill
                        unoptimized
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent"></div>

                {/* Back Button */}
                <Link
                    href="/destinations"
                    className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-xl hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Destinations
                </Link>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="bg-cyan-500 px-3 py-1 rounded-full text-sm font-semibold">
                                {destination.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {destination.destinationName}
                        </h1>
                        <div className="flex items-center gap-2 text-lg">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{destination.country}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                About This Destination
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {destination.description}
                            </p>
                        </div>

                        {/* Highlights Section */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                                Highlights
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Best time to visit: Year-round",
                                    "Local cuisine experience",
                                    "Guided tours available",
                                    "Hotel accommodations included",
                                    "24/7 customer support",
                                    "Flexible cancellation policy"
                                ].map((highlight, index) => (
                                    <div key={index} className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map Section (Placeholder) */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                                Location Map
                            </h2>
                            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                    <p className="text-gray-500">Interactive map coming soon</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Right Side */}
                    <div className="space-y-6">
                        {/* Booking Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                            <div className="text-center mb-6">
                                <div className="text-4xl font-bold text-cyan-600">${destination.price}</div>
                                <p className="text-gray-500">per person</p>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Duration</span>
                                    </div>
                                    <span className="font-semibold text-gray-800">{destination.duration}</span>
                                </div>

                                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>Departure Date</span>
                                    </div>
                                    <span className="font-semibold text-gray-800">
                                        {new Date(destination.departureDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Availability</span>
                                    </div>
                                    <span className="font-semibold text-green-600">In Stock</span>
                                </div>
                            </div>

                            <button className="w-full bg-linear-to-r from-cyan-600 to-cyan-500 text-white font-semibold py-3 px-4 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 mb-3">
                                Book This Package
                            </button>

                            <button className="w-full border-2 border-cyan-500 text-cyan-600 font-semibold py-3 px-4 rounded-xl hover:bg-cyan-50 transition-all duration-300">
                                Add to Wishlist
                            </button>
                        </div>

                        {/* Quick Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="font-bold text-gray-800 mb-3">Quick Info</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>✓ Instant confirmation</p>
                                <p>✓ Free cancellation up to 7 days before</p>
                                <p>✓ Best price guarantee</p>
                                <p>✓ Secure booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationsDetailsPage;