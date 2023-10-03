import clsx from "clsx";
import {Link} from "@inertiajs/react";

export default function ButtonLink({
                                   className = "bg-black",
                                       href,
                                   children,
                                   ...props
                               }) {
    return (
        <Link
            {...props}
            href={href}
            className={clsx(
                className,
                "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center text-center gap-x-2 px-4 p-2 text-white rounded-lg"
            )}
        >
            {children}
        </Link>
    );
}
