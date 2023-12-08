import React from "react";
import App from "@/Layouts/App";
import { Head, Link } from "@inertiajs/react";
import { numberFormat } from "@/Libs/Helper";
import Container from "@/Components/Container";
import Button from "@/Components/Button";
import { Inertia } from "@inertiajs/inertia";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ButtonLink from "@/Components/ButtonLink.jsx";

export default function Show({ auth, invoice }) {
    Echo.private(`invoice.paid.${auth.user.id}`)
        .listen('InvoicePaid',
            ({invoice}) =>{
                if(invoice.status == 'settlement'){
                    Inertia.get('/products/me')
                }
            })
    return (
        <div className="pt-10">
            <Head title={`Your order - ${invoice.order_id}`} />
            <Container>
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        {invoice.qr_code ? <img className='border shadow-sm rounded-lg' src={invoice.qr_code} alt=""/> : null}
                        {invoice.bank ?
                            <div className='flex h-full justify-center items-center'>
                                <div className='p-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg border-2 border-gray-50'>
                                    <div><strong className='font-semibold uppercase'>{invoice.bank.name}</strong> Virtual Account Number</div>
                                    <div className='text-center'>{invoice.bank.va_number}</div>
                                </div>
                            </div>
                            : null}
                    </div>
                    <div>
                        <div className="prose">
                            <h3>Instructions</h3>
                            <ol>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>At commodi eaque exercitationem maiores.</li>
                                <li>Culpa delectus explicabo vero voluptas.</li>
                                <li>Commodi error laudantium libero tempora!</li>
                                <li>Cupiditate dolores in nobis officiis.</li>
                                <li>Fuga iste optio quos voluptates.</li>
                                <li>Eaque libero natus repudiandae velit.</li>
                                <li>Architecto exercitationem hic nobis sapiente.</li>
                                <li>Cum nesciunt quia suscipit veniam.</li>
                                <li>Atque dolor error iusto quidem!</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-4'>
                    <ButtonLink className='bg-blue-600' href='/products/me'>Already Payment</ButtonLink>
                </div>
            </Container>
        </div>
    );
}

Show.layout = (page) => <App children={page} />;
