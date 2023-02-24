import { useStore } from '../store/store';
import Layout from "../componants/Layout"
import css from '../styles/Cart.module.css'
import { urlFor } from '../lib/client'
import Image from "next/image";
import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import OrderModal from '../componants/OrderModal';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";



function Cart() {

    const cartData = useStore((state) => state.cart)
    const removePizza = useStore((state) => state.removePizza)
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [update, setUpdate] = useState(true);
    const [order, setOrder] = useState(null)

    useEffect(() => {
        setOrder(localStorage.getItem('order '));
    }, [])
    // console.log('order', order)
    // typeof window !== 'undefined' && localStorage.getItem('order ')

    useEffect(() => {
        localStorage.setItem('total', total());
    }, [update])

    const handleRemove = (i) => {
        removePizza(i);
        toast.error('Item removed');
    }

    const router = useRouter()
    const handleOnDelivery = () => {
        setPaymentMethod(0);
        setUpdate(!update)
        // typeof window !== 'undefined' && localStorage.setItem('total', total());

    }

    const handleCheckout = async () => {
        setUpdate(!update)
        // typeof window !== 'undefined' && localStorage.setItem('total', total());
        setPaymentMethod(1);
        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(cartData.pizzas),
        });
        if (response.status === 500) return;

        const data = await response.json();
        toast.loading("Redirecting...");
        router.push(data.url)
    }

    const total = () => cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0)
    return (
        <Layout>
            <div className={css.container}>
                {/* details */}

                <div className={css.details}>
                    <table className={css.table}>

                        <thead >
                            <tr>
                                <th>Pizza</th>
                                <th>Name</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody className={css.tbody}>
                            {
                                cartData.pizzas.map((pizza, i) => {
                                    const src = urlFor(pizza.image).url();
                                    return (
                                        <tr key={i}>
                                            <td className={css.imageTd}>
                                                <Image loader={() => src} src={src} alt="hehe" width={85} height={85} objectFit="cover" /></td>

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

                    {
                        !order && cartData.pizzas.length > 0 ? (
                            <div className={css.button}>
                                <button className='btn' onClick={handleOnDelivery}>Pay on Delivery</button>
                                <button className='btn' onClick={handleCheckout}>Pay Now</button>
                            </div>
                        ) : null
                    }


                </div>
            </div>

            <Toaster />

            {/* model method used from mantine library*/}

            <OrderModal
                opened={paymentMethod === 0}
                setOpened={setPaymentMethod}
                paymentMethod={paymentMethod}
            />
        </Layout>
    )
};

export default dynamic(() => Promise.resolve(Cart), { ssr: false })

