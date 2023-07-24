import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <Container>Dashboard</Container>
        </>
    );
}

Dashboard.layout = (page) => <App children={page} />;
