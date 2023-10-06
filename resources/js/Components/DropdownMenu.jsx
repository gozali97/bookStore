import { Menu } from "@headlessui/react";
import clsx from "clsx";
import {InertiaLink} from "@inertiajs/inertia";

function Link({ href, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <InertiaLink
                    {...props}
                    className={clsx(
                        active && "bg-gray-100 text-black",
                        "w-full block text-left text-gray-600 py-1 mt-2 px-3 text-sm"
                    )}
                    href={href}
                >
                    {children}
                </InertiaLink>
            )}
        </Menu.Item>
    );
}

function DropdownMenu({ label, children, buttonClassname=''}) {
    return (
        <Menu className="relative" as="div">
            {({open}) => (
                <>
            <Menu.Button className={clsx('flex items-center gap-x-2', buttonClassname)}>
                {label}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={clsx('w-6 h-6 transition duration-200', open && 'rotate-180')}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

            </Menu.Button>
            <Menu.Items className="absolute bg-white py-1 rounded border w-64 top-full right-0 overflow-hidden">
                {children}
            </Menu.Items>
            </> )}
        </Menu>
    );
}
function Divider(){
    return<div className='bg-gradient-to-r from-gray-300 via-white to-white -full block h-px    '/>
}

DropdownMenu.Link = Link;
DropdownMenu.Divider = Divider;
export default DropdownMenu;
