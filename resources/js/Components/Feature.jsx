import React from "react";
import {IconLock, IconUsers, IconWorld} from "@tabler/icons-react";

export default function Feature() {
    return (
    <section className="bg-gray-100 py-4">
        <div className="container mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
            <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white p-8 shadow-md rounded-md flex flex-col justify-center items-center">
                        <IconLock className="text-blue-500 mb-1" size="40"/>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Secure</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white p-8 shadow-md rounded-md flex flex-col justify-center items-center">
                        <IconWorld className="text-blue-500 mb-1" size="40"/>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Global</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-8">
                    <div className="bg-white p-8 shadow-md rounded-md flex flex-col justify-center items-center">
                        <IconUsers className="text-blue-500 mb-1" size="40"/>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Collaborative</h3>
                        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
