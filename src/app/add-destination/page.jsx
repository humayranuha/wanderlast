'use client';
import { FieldError, Input, Label, TextField, Select, TextArea, ListBox, Button } from '@heroui/react';
import React, { useState } from 'react';

const AddDestinationPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log('Form Data:', data);

        try {
            const res = await fetch('http://localhost:5000/destinations', {
                method: 'POST',
                headers: {  // Fixed typo: was 'hedears'
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const destination = await res.json();
            console.log('Created Destination:', destination);
            setMessage('Destination added successfully!');
            e.target.reset(); // Clear form on success
        } catch (error) {
            console.error('Error:', error);
            setMessage(`Error: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-r from-blue-50 via-white to-purple-50">
            <div className="container mx-auto max-w-5xl">
                {/* Header Section */}
                <div className="text-center pt-12 pb-6">
                    <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-600 to-cyan-500 bg-clip-text text-transparent">
                        Add New Destination
                    </h1>
                    <p className="text-gray-500 mt-2">Fill in the details to add a new travel package</p>
                </div>

                <form onSubmit={onSubmit} className="p-8 space-y-8 bg-white rounded-2xl shadow-xl mx-4 mb-12 border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Destination Name */}
                        <div className="md:col-span-2">
                            <TextField name="destinationName" isRequired>
                                <Label className="text-gray-700 font-semibold">Destination Name</Label>
                                <Input 
                                    placeholder="Bali Paradise" 
                                    className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300" 
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired>
                            <Label className="text-gray-700 font-semibold">Country</Label>
                            <Input 
                                placeholder="Indonesia" 
                                className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300" 
                            />
                            <FieldError />
                        </TextField>

                        {/* Category */}
                        <div>
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label className="text-gray-700 font-semibold">Category</Label>
                                <Select.Trigger className="rounded-xl border-gray-200">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="Beach" textValue="Beach">
                                            Beach
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Mountain" textValue="Mountain">
                                            Mountain
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="City" textValue="City">
                                            City
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Adventure" textValue="Adventure">
                                            Adventure
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cultural" textValue="Cultural">
                                            Cultural
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Luxury" textValue="Luxury">
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired>
                            <Label className="text-gray-700 font-semibold">Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300"
                            />
                            <FieldError />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired>
                            <Label className="text-gray-700 font-semibold">Duration</Label>
                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300"
                            />
                            <FieldError />
                        </TextField>

                        {/* Departure Date */}
                        <div className="md:col-span-2">
                            <TextField name="departureDate" type="date" isRequired>
                                <Label className="text-gray-700 font-semibold">Departure Date</Label>
                                <Input 
                                    type="date" 
                                    className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300" 
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="md:col-span-2">
                            <TextField name="imageUrl" isRequired>
                                <Label className="text-gray-700 font-semibold">Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://example.com/bali-paradise.jpg"
                                    className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300"
                                />
                                <FieldError />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <TextField name="description" isRequired>
                                <Label className="text-gray-700 font-semibold">Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience..."
                                    className="rounded-xl border-gray-200 focus:border-cyan-400 transition-all duration-300 min-h-30"
                                />
                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Message Display */}
                    {message && (
                        <div className={`p-3 rounded-lg text-center ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {message}
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="pt-4">
                        <Button
                            type="submit"
                            variant="outline"
                            isLoading={isSubmitting}
                            className="rounded-xl w-full bg-linear-to-r from-cyan-600 to-cyan-500 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 border-0"
                        >
                            {isSubmitting ? "Adding Destination..." : "Add Destination"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDestinationPage;