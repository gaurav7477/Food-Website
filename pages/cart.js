import { useStore } from '../store/store';
import Layout from "../componants/Layout"
import css from '../styles/Cart.module.css'
import { urlFor } from '../lib/client'
import Image from "next/image";
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import OrderModal from '../componants/OrderModal';



export default function Cart() {

    const cartData = useStore((state) => state.cart)
    const removePizza = useStore((state) => state.removePizza)
    const [paymentMethod,setPaymentMethod] =  useState(null);

    const handleRemove = (i) => {
        removePizza(i);
        toast.error('Item removed');
    }
    const handleOnDelivery = ()=>{
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total',total());
    }

    const total = () => cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0)
    return (
        <Layout>
            <div className={css.container}>
                {/* details */}

                <div className={css.details}>
                    <table className={css.table}>

                        <thead >
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>

                        <tbody className={css.tbody}>
                            {
                                cartData.pizzas.map((pizza, i) => {
                                    const src = urlFor(pizza.image).url();
                                    return (
                                        <tr key={i}>
                                            <td className={css.imageTd}>
                                                <Image loader={() => src} src={src} alt=" " width={85} height={85} objectFit="cover" /></td>

                                            <td>{pizza.name}</td>
                                            <td>{pizza.size === 0 ? "small" : pizza.size === 1 ? "medium" : "large"}</td>
                                            <td>{pizza.price}</td>
                                            <td>{pizza.quantity}</td>
                                            <td>{pizza.price * pizza.quantity}</td>
                                            <td style={{
                                                color: "var(--themeRed)",
                                                cursor: 'pointer'
                                            }}
                                                onClick={() => handleRemove(i)}
                                            >x</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>


                </div>

                {/* summary */}

                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.cartDetails}>
                        <div>
                            <span>Items</span>
                            <span> {cartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span> $ {total()}</span>
                        </div>
                    </div>

                    <div className={css.button}>
                        <button className='btn' onClick={handleOnDelivery}>Pay on Delivery</button>
                        <button className='btn'>Pay Now</button>
                    </div>

                </div>
            </div>

            <Toaster />

            {/* model method used from mantine library*/}

            <OrderModal 
            opened = {paymentMethod === 0}
            setOpened = {setPaymentMethod}
            paymentMethod = {paymentMethod}
            />
        </Layout>
    )
};
