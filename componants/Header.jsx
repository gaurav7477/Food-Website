import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons'
import { useStore } from '../store/store'
import Link from 'next/link';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter();
    const state = useStore((state) => state)
    // console.log(state);

    const [order, setOrder] = useState("");
    useEffect(() => {
        setOrder(localStorage.getItem("order"));
    }, []);

    const items = useStore((state) => state.cart.pizzas.length)
    return (
        <div className={css.header}>
            {/* logo side */}
            <div className={css.logo}>
                <Image src={Logo} alt="heh" width={50} height={50} />
                <span>Fudo</span>
            </div>

            {/* menu side */}

            <ul className={css.menu}>
                <li>
                    <Link href={"../"}>Home</Link>
                </li>
                <li>
                    <Link href={"../"}>Menu</Link>
                </li>
                <li>
                    <Link href={"/contact"}>Contact</Link>
                </li>
                {/* <li>Contact</li> */}
            </ul>

            {/* rigth side */}
            <div className={css.rigthSide}>
                <Link href='/cart'>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="#2E2E2E" />
                        <div className={css.badge}>{items}</div>
                    </div>
                </Link>

                {
                    order && (
                        <Link href={`/order/${order}`}>
                            <div className={css.cart}>
                                <UilReceipt size={35} color="#2E2E2E" />
                                {order != "" && <div className={css.badge}>1</div>}
                            </div>
                        </Link>
                    )
                }
            </div>

        </div>
    )
};
