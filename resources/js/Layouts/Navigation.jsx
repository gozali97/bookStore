import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import NavLink from "@/Components/NavLink.jsx";
import DropdownMenu from "@/Components/DropdownMenu.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import {Link, usePage} from "@inertiajs/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import {IconMenu2} from "@tabler/icons-react";

export default function Navigation() {
    const { auth, categories_global, carts_global_count } = usePage().props;
    return (
        <nav className="bg-gray-800 py-2 border-b shadow-md fixed top-0 left-0 w-full z-50">
                <div className="flex w-full justify-between px-4">
                    <div className="w-1/4 justify-start">
                        <Link href={route('home')}>
                        <ApplicationLogo />
                        </Link>
                    </div>
                    <div className="hidden lg:flex lg:w-full justify-center gap-x-6 w-2/4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Products</NavLink>
                        <DropdownMenu buttonClassname='text-white mt-3' label='Categories'>
                            {categories_global.map((category) => (
                                <Dropdown.Link
                                    key={category.slug}
                                    href={`/products?category=${category.slug}`}
                                >
                                    {category.nama_kategori}
                                </Dropdown.Link>
                            ))}
                        </DropdownMenu>
                        <NavLink href="#">About</NavLink>
                        <NavLink href="#">Contact</NavLink>
                    </div>
                    <div className="flex w-1/4 gap-2 justify-end">
                        {auth.user ? (
                            <>
                                <NavLink
                                    className="flex items-center gap-x-2"
                                    href="/carts"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-5 inline h-5"
                                    >
                                        <path
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    {carts_global_count > 0
                                        ? carts_global_count
                                        : null}
                                </NavLink>

                                <DropdownMenu buttonClassname='text-white mt-3' label={auth.user.name}>
                                    <Dropdown.Link href="/">
                                        Dashboard
                                    </Dropdown.Link>
                                    <Dropdown.Link href="/profile">
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link href="/carts">
                                        Keranjang
                                    </Dropdown.Link>
                                    <Dropdown.Link href="/products/me">
                                        Your Products
                                    </Dropdown.Link>
                                    <Dropdown.Link href="/history">
                                        History
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Dropdown.Link>
                                </DropdownMenu>
                                <div className="flex lg:hidden -ml-2">
                                    <Menu>
                                        <MenuHandler>
                                            <Button className="bg-gray-800 shadow-none px-4"><IconMenu2/></Button>
                                        </MenuHandler>
                                        <MenuList className="py-4 bg-gray-800 px-2 w-52">
                                            <MenuItem className="hover:bg-gray-400 py-2 mb-2">
                                                <NavLink href="/">Home</NavLink>
                                            </MenuItem>
                                            <MenuItem className="hover:bg-gray-400 py-2 mb-2">
                                                <NavLink href="/products">Products</NavLink>
                                            </MenuItem>
                                            <MenuItem className="text-blue-500">
                                                Category :
                                                   <div className="flex flex-col gap-2">
                                                       {categories_global.map((category) => (
                                                           <Link
                                                               className="text-white rounded hover:text-orange-500 hover:bg-gray-400 py-2"
                                                               key={category.slug}
                                                               href={`/products?category=${category.slug}`}
                                                           >
                                                               {category.nama_kategori}
                                                           </Link>
                                                       ))}
                                                   </div>
                                            </MenuItem>
                                            <MenuItem className="hover:bg-gray-400 py-2 mb-2">
                                                <NavLink href="#">About</NavLink>
                                            </MenuItem>
                                            <MenuItem className="hover:bg-gray-400 py-2 mb-2">
                                                <NavLink href="#">Contact</NavLink>
                                            </MenuItem>
                                        </MenuList>
                                    </Menu>
                                </div>

                            </>
                        ) : (
                            <>
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
        </nav>
    );
}




