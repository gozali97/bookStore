import { numberFormat } from "@/Libs/Helper";
import {Link, router} from "@inertiajs/react";
import React from "react";
import Button from "@/Components/Button.jsx";
import {toast} from "react-toastify";

export default function ProductItem({ product }) {
    const TruncateText = ({ text, maxLength }) => {
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    };

    return (
        <div className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href={`/products/${product.slug}`}>
                <img
                    className="peer absolute top-0 right-0 h-full w-full object-cover"
                    src={product.gambar_produk}
                    alt=""
                />
                <img className="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0" src="https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fHww" alt="product image" />
                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
            </Link>

            <div className="mt-4 px-5 pb-5">
                <Link
                    className="text-sm block mb-2"
                    href={`/products/${product.slug}`}
                >
                    {<TruncateText text={product.nama_produk} maxLength={25} />}
                </Link>
                <div className="flex items-center justify-between text-sm">
                    <Link href={`/products?category=${product.category.slug}`}>
                        {product.category.nama_kategori}
                    </Link>
                </div>
                <div className="mt-2 mb-1 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">RP.{numberFormat(product.harga)}</span>
                    </p>
                </div>

            </div>
        </div>
    );
}
