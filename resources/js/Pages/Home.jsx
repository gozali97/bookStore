import App from "@/Layouts/App";
import {Head, Link, router} from "@inertiajs/react";
import React from "react";
import ProductItem from "@/Components/ProductItem.jsx";
import NavLink from "@/Components/NavLink.jsx";
import Collection from "@/Components/Collection.jsx";
import Feature from "@/Components/Feature.jsx";

export default function Home(props) {
    const { data: products, meta, links } = props.products;

    return (
            <div className='px-4'>
                <Head title="Home" />
                    <section className="mx-4 mt-10 bg-gray-100 border shadow rounded">
                        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-5 lg:pt-28">
                            <div className="mr-auto flex w-full flex-col justify-center lg:col-span-3">
                                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">Book Store</h1>
                                <div className="space-y-4 sm:flex mt-4 sm:space-y-0 sm:space-x-4">
                                    <p className="line-clamp-1 lg:line-clamp-none">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic nemo numquam perferendis reiciendis repellat reprehenderit ut. A ad adipisci aliquam aliquid commodi deleniti doloremque earum eius esse et eum expedita facilis, ipsum itaque iusto minus nulla numquam perferendis perspiciatis porro quaerat quia quidem quis quisquam sed soluta vel? Cumque earum eius, eos fuga itaque iusto nemo possimus quae reiciendis repellat reprehenderit similique, tempore veniam veritatis vero! A aliquid animi architecto aspernatur assumenda beatae, consequuntur cum cumque deserunt distinctio error est et eum eveniet fuga illo maxime minima molestiae natus nisi obcaecati quae quis quisquam sed sequi sint veniam vitae voluptas!</p>
                                </div>
                            </div>
                            <div className='w-full lg:col-span-2'>
                                <img className='w-full' src="https://www.nicepng.com/png/detail/139-1392630_ibooks-store-icon-online-book-shop-icon.png" alt=""/>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col w-full py-6 justify-center">
                        {products.length ? (
                            <div className="grid px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {products.map((product) => (
                                    <ProductItem product={product} key={product.id} />
                                ))}
                            </div>
                        ) : null}
                        <div className="flex justify-end">
                            <Link href={route('products.index')} className="text-gray-900 hover:text-slate-700 hover:underline">Show more . . .</Link>
                        </div>
                    </div>
                <div className="px-4">
                    <Feature/>
                </div>
                    <div className="px-4">
                        <Collection/>
                    </div>
            </div>
    );
}
Home.layout = (page) => <App children={page}></App>;
