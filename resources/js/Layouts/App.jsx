import { useState } from "react";

import Navbar from "./Navbar";

export default function App({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />

            <main className="py-12 ">{children}</main>
        </div>
    );
}
