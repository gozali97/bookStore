import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import ProductItem from "@/Components/ProductItem";
import Header from "@/Components/Header";

export default function Index(props) {
    const { data: products, meta, links } = props.products;

    return (
        <div>
            <Head title="Products" />
            <Header
                title="Products"
                desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, dignissimos."
            />
            <Container>
                {products.length ? (
                    <div className="grid sm:grid-cols-2 md:grid lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                ) : null}
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
