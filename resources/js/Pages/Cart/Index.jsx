import React from "react";
import App from "@/Layouts/App";
import {Head, Link} from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Container from "@/Components/Container.jsx";
import Button from "@/Components/Button.jsx";
import Table from "@/Components/Table.jsx";
import {numberFormat} from "@/Libs/Helper.jsx";
import {Inertia} from "@inertiajs/inertia";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from "@/Components/Card.jsx";
import ButtonLink from "@/Components/ButtonLink.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import NavLink from "@/Components/NavLink.jsx";
import DropdownMenu from "@/Components/DropdownMenu.jsx";

export default function Index({carts}) {
    const onDeleteHandler = async (cart_id) => {
        try {
            await Inertia.post(route('carts.destroy', cart_id), { _method: 'delete' });
            toast.error("Removed!");
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while deleting the item.");
        }
    };
    let ppn = (11/100) * carts.reduce((acc, cart) => acc + cart.price,0);

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Head title="Your Cart"/>
            <Header title="Your Carts" description="The Product  was added to cart"/>
            <Container>
                <Card>
                    <Card.Header>Your Cart</Card.Header>
                    <Card.Table>
                        <Table>
                            <Table.Thead>
                                <tr>
                                    <Table.Th>#</Table.Th>
                                    <Table.Th>Name</Table.Th>
                                    <Table.Th className="text-right">Price</Table.Th>
                                    <Table.Th></Table.Th>
                                </tr>
                            </Table.Thead>
                            <Table.Tbody>
                                {carts.length ? <>
                                    {carts.map((cart, i) => (
                                        <tr key={cart.id}>
                                            <Table.Td>{i + 1}</Table.Td>
                                            <Table.Td>
                                                <Link href={`/products/${cart.product.slug}`}>
                                                    {cart.product.name}
                                                </Link>
                                            </Table.Td>
                                            <Table.Td className="text-right">Rp. {numberFormat(cart.price)}</Table.Td>
                                            <Table.Td className="text-right">
                                                <Button onClick={()=> onDeleteHandler(cart.id)} className="focus:outline-none inline">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewB ox="0 0 24 24"
                                                         strokeWidth={1.5} stroke="currentColor"
                                                         className="w-6 h-6 text-red-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                                                    </svg>
                                                </Button>
                                            </Table.Td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <Table.Td></Table.Td>
                                        <Table.Td>PPN 11%</Table.Td>
                                        <Table.Td className="text-right">RP. {numberFormat(ppn)}</Table.Td>
                                    </tr>
                                    <tr className='bg-gray-200 text-gray-900 font-bold'>
                                        <Table.Td></Table.Td>
                                        <Table.Td>Total</Table.Td>
                                        <Table.Td className="text-right">RP. {numberFormat(carts.reduce((acc, cart) => acc + cart.price,0) + ppn)}</Table.Td>
                                        <Table.Td></Table.Td>
                                    </tr>
                                </>: <Table.Empty colSpan={4} message={<>
                                    The Cart is currently empty
                                    <br/>
                                    <br/>
                                    <Link href='/products' className="bg-green-500 text-white p-2 mt-5 rounded">Try add new one</Link>
                                </>}/>}
                            </Table.Tbody>
                        </Table>
                    </Card.Table>
                </Card>
            <div className='mt-4 flex justify-end'>
                <DropdownMenu label='Pilih Metode pembayaran'>
                    <Dropdown.Link href='#'>BCA Virtual Account</Dropdown.Link>
                    <Dropdown.Link href='#'>BNI Virtual Account</Dropdown.Link>
                    <Dropdown.Link href='#'>Mandiri Virtual Account</Dropdown.Link>
                </DropdownMenu>
            </div>
            </Container>
        </div>
    );
}

Index.layout = (page) => <App children={page} />;
