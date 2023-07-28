import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    const { auth, categories_global, carts_global_count } = usePage().props;
    return (
        <nav className="bg-gray-800 py-2 border-b shadow-md fixed top-0 left-0 w-full z-50">
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Produk</NavLink>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <NavLink>{"Categories"}</NavLink>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                {categories_global.map((category) => (
                                    <Dropdown.Link
                                        key={category.slug}
                                        href={`/prouducts?category=${category.slug}`}
                                    >
                                        {category.nama_kategori}
                                    </Dropdown.Link>
                                ))}
                            </Dropdown.Content>
                        </Dropdown>
                        {auth.user ? (
                            <>
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <NavLink>{auth.user.name}</NavLink>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link href="/">
                                            Dashboard
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/profile">
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/cart">
                                            Keranjang
                                        </Dropdown.Link>
                                        <Dropdown.Link href="/history">
                                            History
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href="/logout"
                                            method="post"
                                        >
                                            Logout
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                                <NavLink
                                    className="flex items-center gap-x-2"
                                    href="/cart"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 inline h-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    {carts_global_count > 0
                                        ? carts_global_count
                                        : null}
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink href="/login">Login</NavLink>
                                <NavLink href="/register">Register</NavLink>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
