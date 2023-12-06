import React from "react";
import {Link} from "@inertiajs/react";

export default function Footer() {
    return (
        <footer className="relative mt-20 bg-gray-900 py-10">
            <div className="absolute -top-10 left-1/2 h-16 w-16 -translate-x-1/2 rounded-xl border-4 border-sky-500 bg-white p-2"><img className="h-full object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9bPXhMN1-H-FrxVzi1V-vVA5izae5hNLXuEmKhMjXmuiEbGH5XsF5Tup29qN4sWU6Ec&usqp=CAU" alt="" /></div>
            <nav aria-label="Footer Navigation" className="mx-auto mb-10 flex max-w-lg flex-col gap-10 text-center sm:flex-row sm:text-left">
                <a href="#" className="font-medium text-white">Demo</a>
                <a href="#" className="font-medium text-white">Support</a>
                <a href="#" className="font-medium text-white">Privacy Policy</a>
                <a href="#" className="font-medium text-white">Terms & Conditions</a>
            </nav>
            <p className="py-4 text-center text-gray-300">© 2022 Boleno | All Rights Reserved</p>
        </footer>
    );
}
