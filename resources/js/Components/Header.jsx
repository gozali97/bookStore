import React from "react";
import Container from "./Container";

export default function Header({ title, desc }) {
    return (
        <div className="flex items-center w-full bg-gray-200 border-b border-gray-300 mt-2 mb-6">
            <div className="sm:w-1/2">
                <div className="flex w-full justify-center">
                    <div className="w-96 p-6">
                        <dotlottie-player src="https://lottie.host/b2908de2-aab9-46ff-9e1e-5e6eb5c6bda7/7QTx2ErnTT.json"  speed="2" direction="1" mode="normal" loop autoplay></dotlottie-player>
                    </div>

                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Book Store</span>
                    <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">{title}
                </h2>
                <p className="text-gray-700">
                    {desc}
                </p>
                </div>
            </div>
        </div>
    );
}
