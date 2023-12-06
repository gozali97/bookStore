import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import ProductItem from "@/Components/ProductItem";
import Header from "@/Components/Header";
import Pagination from "@/Components/Pagination";

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
                    <div className="grid px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <ProductItem product={product} key={product.id} />
                        ))}
                    </div>
                ) : null}
                <Pagination meta={meta} links={links} />
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
