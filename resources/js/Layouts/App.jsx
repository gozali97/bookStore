import React, { useState } from "react";
import Navigation from "./Navigation.jsx";
import { Toaster } from "react-hot-toast";
import Toastfy from "@/Components/Toastfy.jsx";
import Footer from "@/Components/Footer.jsx";

export default function App({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Toastfy/>
            <Navigation />
            <Toaster position="top-center" reverseOrder={false} />
            <main className="py-12">{children}</main>
            <div className="-mb-14">
                <Footer/>
            </div>
        </div>
    );
}
