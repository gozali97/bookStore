import clsx from "clsx";

export default function Button({
    className = "bg-black",
    children,
    processing,
    type = "submit",
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                processing && 'opacity-25',
                className,
                "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center text-center gap-x-2 px-4 p-2 text-white rounded-lg"
            )}
        >
            {children}
        </button>
    );
}
