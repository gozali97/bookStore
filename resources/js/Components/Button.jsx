import clsx from "clsx";

function Button(props) {
    const { className = "bg-black", children, text, type = "submit" } = props;
    return (
        <button
            {...props}
            type={type}
            className={clsx(
                className,
                "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 inline-flex justify-center text-center gap-x-2 px-4 p-2 text-white rounded-lg"
            )}
        >
            {text || children}
        </button>
    );
}

export default Button;
