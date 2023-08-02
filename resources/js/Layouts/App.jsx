import { useState } from "react";

import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

export default function App({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <main className="py-12 mt-10">{children}</main>
        </div>
    );
}
