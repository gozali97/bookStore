import React from "react";
import {Link} from "@inertiajs/react";

export default function Collection() {
    return (
        <div className="mt-10 w-full overflow-hidden rounded-xl border shadow-lg">
            <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
                <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
                    <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Winter Collection</h2>
                    <p className="mt-2 text-lg">By Ensiklopedia</p>
                    <p className="mt-4 mb-8 max-w-md text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iusto, cumque dolores sit odio ex.</p>
                    <Link href={route('products.index')}className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
                        <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Shop now </span>
                        <svg className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
                    <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522742943744-b3cd4e6f98e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxib29rJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D" loading="lazy" />
                </div>
            </div>
        </div>

    );
}
