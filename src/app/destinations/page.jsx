import React from 'react';
import Image from 'next/image';

const DestinationsPage = async () => {
    const res = await fetch('http://localhost:5000/destinations', {
        cache: 'no-store' // Ensures fresh data on each request
    });
    const destinations = await res.json();

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto max-w-7xl px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent mb-4">
                        Explore All Destinations
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Discover amazing travel packages from around the world
                    </p>
                    <div className="mt-4 inline-block h-1 w-20 bg-linear-to-r from-cyan-600 to-cyan-500 rounded-full"></div>
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Total Destinations</p>
                            <p className="text-3xl font-bold text-cyan-600">{destinations.length}</p>
                        </div>
                        <div className="h-12 w-12 bg-cyan-100 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Destinations Grid */}
                {destinations.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">✈️</div>
                        <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Destinations Found</h3>
                        <p className="text-gray-500">Start adding some amazing travel destinations!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination) => (
                            <div
                                key={destination._id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={destination.imageUrl}
                                            alt={destination.destinationName}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-cyan-600 shadow-md">
                                        {destination.category}
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/70 to-transparent p-4">
                                        <div className="text-white font-bold text-xl">
                                            ${destination.price}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                                            {destination.destinationName}
                                        </h2>
                                    </div>

                                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-sm">{destination.country}</span>
                                    </div>

                                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span>{destination.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{new Date(destination.departureDate).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {destination.description}
                                    </p>

                                    <button className="w-full bg-linear-to-r from-cyan-600 to-cyan-500 text-white font-semibold py-2 px-4 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DestinationsPage;