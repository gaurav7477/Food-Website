import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css'
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import  toast,{Toaster} from 'react-hot-toast';
import { useStore } from '../store/store';
import { useRouter } from 'next/router';


export default function OderModal({opened,setOpened,paymentMethod}) {

    const theme = useMantineTheme();
    const router = useRouter();
    const [formData, setFormData] = useState({})

    const handleInput = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const id = await createOrder({...formData,total,paymentMethod});
        toast.success("order placed");
        console.log("order placed",id)
        resetCart();
        {
            typeof window !== 'undefined' && localStorage.setItem('order',id);   
        } 
        router.push(`/order/${id}`)
    }
    const resetCart = useStore((state)=>state.resetCart);


    const total = typeof window !== 'undefined' && localStorage.getItem('total');
    // console.log('total', total)
    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened = {opened}
            onClose = {()=>setOpened(null)}
        >
            {/* Modal content */}
            <form onSubmit={handleSubmit} action='' className={css.formContainer}>

                <input onChange = {handleInput} type="text" name='name' required placeholder='Name' />
                <input onChange = {handleInput} type="text" name='phone' required placeholder='Phone Number' />
                <textarea onChange = {handleInput} name='address' rows={3} required placeholder='Address'></textarea>

                <span>
                    You will Pay <span>${total}</span> on Delivery
                </span>

                <button type="submit"> Place Order</button>
            </form>
            <Toaster />
        </Modal>
    );
};

