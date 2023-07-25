import React from "react";
import Container from "./Container";

export default function Header({ title, desc }) {
    return (
        <div className="py-16 bg-white border-b shadow-sm -mt-12 mb-4">
            <Container>
                <h1 className="font-semibold text-2xl mb-4">{title}</h1>
                <div className="text-lg leading-relaxed text-gray-500">
                    {desc}
                </div>
            </Container>
        </div>
    );
}
