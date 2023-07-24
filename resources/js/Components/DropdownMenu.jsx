import { Menu } from "@headlessui/react";
import clsx from "clsx";

function Link({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <Link
                    {...props}
                    className={clsx(
                        active && "bg-yellow-500 text-white",
                        "text-white text-left block w-full py-2 px-4 "
                    )}
                    href={href}
                >
                    {children}
                </Link>
            )}
        </Menu.Item>
    );
}

function DropdownMenu({ label, children }) {
    return (
        <Menu className="relative" as="div">
            <Menu.Button>{label}</Menu.Button>
            <Menu.Items className="absolute w-64 top-full right-0">
                {children}
            </Menu.Items>
        </Menu>
    );
}

DropdownMenu.Link = Link;
export default DropdownMenu;
