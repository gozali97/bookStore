import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";

export default function NavLink({ href, children, className, ...props }) {
    return (
        <Link
            href={href}
            {...props}
            className={clsx(
                className,
                usePage().url == href && "font-semibold text-yellow-500",
                "text-white hover:text-orange-600 py-3 px-1"
            )}
        >
            {children}
        </Link>
    );
}
