import React from "react";
import App from "@/Layouts/App";
import { Head } from "@inertiajs/react";
import Container from "@/Components/Container";
import Pagination from "@/Components/Pagination";
import Card from "@/Components/Card.jsx";
import Table from "@/Components/Table.jsx";
import {numberFormat} from "@/Libs/Helper.jsx";

export default function Index(props) {
    const { data: carts, meta, links } = props.carts;

    return (
        <div className="pt-10">
            <Head title="History" />
           <Container>
               <Card>
                   <Card.Header>My History</Card.Header>
                   <Card.Table>
                       <Table>
                           <Table.Thead>
                               <tr>
                                   <Table.Th className='w-0'>#</Table.Th>
                                   <Table.Th>Product</Table.Th>
                                   <Table.Th>Price</Table.Th>
                                   <Table.Th>Created</Table.Th>
                               </tr>
                           </Table.Thead>
                           <Table.Tbody>
                               {carts.length ? <>
                                   {carts.map((cart, i) =>(
                                       <tr key={cart.id}>
                                           <Table.Td className='w-0'>{meta.from + i}</Table.Td>
                                           <Table.Td>
                                               <a className='text-blue-600 underline' href={cart.product.slug} target="_blank" rel="noopener noreferrer">{cart.product.name}</a>
                                           </Table.Td>
                                           <Table.Td>
                                               Rp{''}. {numberFormat(cart.price)}
                                           </Table.Td>
                                           <Table.Td>
                                               {cart.created_at}
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
    );
}

Index.layout = (page) => <App children={page} />;
