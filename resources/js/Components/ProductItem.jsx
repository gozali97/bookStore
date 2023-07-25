import { numberFormat } from "@/Libs/Helper";
import { Link } from "@inertiajs/react";
import React from "react";

export default function ProductItem({ product }) {
    const TruncateText = ({ text, maxLength }) => {
        return text.length > maxLength
            ? text.slice(0, maxLength) + "..."
            : text;
    };

    return (
        <div className="mt-4">
            <Link href={`/products/${product.slug}`}>
                <img
                    className="w-full rounded-lg"
                    src={product.gambar_produk}
                    alt=""
                />
            </Link>

            <div className="mt-4">
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
                    <div>RP.{numberFormat(product.harga)}</div>
                </div>
            </div>
        </div>
    );
}
