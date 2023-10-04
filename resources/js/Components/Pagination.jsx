import { Link } from "@inertiajs/react";
import clsx from "clsx";
import React from "react";

export default function Pagination({ marginTop = 'mt-10',meta, links }) {
    return (
        <div className={clsx('flex items-center justify-center gap-2 mt-10', marginTop)}>
            {meta.links.map((link, i) => (
                <Link
                    key={i}
                    href={link.url}
                    className={clsx(
                        link.active && "text-blue-600",
                        "text-gray-900"
                    )}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    );
}
