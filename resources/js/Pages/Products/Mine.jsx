import Container from "@/Components/Container.jsx";
import {Head, Link} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import React from "react";
import Table from "@/Components/Table.jsx";
import Card from "@/Components/Card.jsx";
import Pagination from "@/Components/Pagination.jsx";

export default function Mine(props) {
    const {data: products, meta, links} = props.products;

    return (
        <div>
            <Head title="My Product" />
            <Container>
                <Card>
                    <Card.Header>Product Your Buy</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th className='w-0'>#</Table.Th>
                                    <Table.Th>Product</Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {products.length ? <>
                                    {products.map((product, i) =>(
                                        <tr key={product.id}>
                                            <Table.Td className='w-0'>{meta.from + i}</Table.Td>
                                            <Table.Td>
                                                <a className='text-blue-600 underline' href={product.slug} target="_blank" rel="noopener noreferrer">{product.nama_produk}</a>
                                            </Table.Td>
                                        </tr>
                                    ))}
                                </> : <Table.Empty colSpan={2}/>}


                            </Table.Tbody>
                        </Table>
                    </Card.Table>
                    <Card.Footer>
                        <Pagination marginTop='mt-0' meta={meta} links={links}/>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

Mine.layout = (page) => <App children={page} />;
