import ApplicationLogo from "@/Components/ApplicationLogo";
import Container from "@/Components/Container";
import DropdownMenu from "@/Components/Dropdownmenu";
import NavLink from "@/Components/NavLink";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Navbar() {
    const { auth } = usePage().props;
    return (
        <nav className="bg-gray-800 py-2 border-b shadow-md">
            <Container>
                <div className="flex items-center justify-between">
                    <ApplicationLogo />
                    <div className="flex items-center gap-x-6">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/dashboard">Dashboard</NavLink>
                        {auth.user ? (
                            <>
                                <NavLink href="/profile">
                                    {auth.user.name}
                                </NavLink>
                                <NavLink href="/logout" method="post">
                                    Logout
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
