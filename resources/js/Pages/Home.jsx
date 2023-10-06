import Container from "@/Components/Container";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import React from "react";

export default function Home() {
    return (
        <div className='px-4'>
            <Head title="BookStore" />
                <section className="bg-white shadow-sm rounded">
                    <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-5 lg:pt-28">
                        <div className="mr-auto place-self-center lg:col-span-3">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">Book Store</h1>
                            <div className="space-y-4 sm:flex mt-4 sm:space-y-0 sm:space-x-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nemo numquam perferendis reiciendis repellat reprehenderit ut. A ad adipisci aliquam aliquid commodi deleniti doloremque earum eius esse et eum expedita facilis, ipsum itaque iusto minus nulla numquam perferendis perspiciatis porro quaerat quia quidem quis quisquam sed soluta vel? Cumque earum eius, eos fuga itaque iusto nemo possimus quae reiciendis repellat reprehenderit similique, tempore veniam veritatis vero! A aliquid animi architecto aspernatur assumenda beatae, consequuntur cum cumque deserunt distinctio error est et eum eveniet fuga illo maxime minima molestiae natus nisi obcaecati quae quis quisquam sed sequi sint veniam vitae voluptas!</p>
                            </div>
                        </div>
                        <div className='w-full lg:col-span-2'>
                            <img className='w-full rounded-lg shadow-lg' src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt=""/>
                        </div>
                    </div>
                </section>
        </div>
    );
}
Home.layout = (page) => <App children={page}></App>;
