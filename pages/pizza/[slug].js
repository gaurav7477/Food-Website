import Layout from '../../componants/Layout'
import { client, urlFor } from "../../lib/client"
import css from '../../styles/pizza.module.css'
import Image from 'next/image';
import leftArrow  from '../../assets/arrowLeft.png'
import rightArrow from '../../assets/arrowRight.png'
import { useState } from 'react';
import { useStore } from '../../store/store';
import toast,{Toaster} from 'react-hot-toast';

export default function pizza({ pizza }) {
    // console.log(pizza)
    const src = urlFor(pizza.image).url();
    const [size,setSize] = useState(1);
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) =>{
        type === "inc" ? setQuantity((prev) => prev+1) : quantity === 1
        ? null : setQuantity((prev) => prev-1);
    };

    // add to cart function

    const addPizza = useStore((state)=>state.addPizza)
    const addToCart= ()=>{
        addPizza({...pizza, price : pizza.price[size], quantity : quantity, size:size})
        // console.log("pizza added");
        toast.success("Added to Cart");
    }


    return (

        <Layout>

            <div className={css.container}>
                {/* left side */}
                <div className={css.ImageWrapper}>
                    <Image
                        loader={() => src}
                        src={src} alt="heheh" objectFit="cover" unoptimized layout="fill" />
                </div>

                {/* right side */}

                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details} </span>
                    <span><span style={{color:"var(--themeRed)"}}>$</span>{pizza.price[size]}</span>
                    <div className={css.size}>
                        <span>size</span>
                        <div className={css.sizeVariants}>
                            <div onClick={()=> setSize(0)} 
                            className= {size ===0 ? css.selected : ""}>small</div>
                            <div onClick={()=> setSize(1)}
                            className= {size ===1 ? css.selected : ""}>medium</div>
                            <div onClick={()=> setSize(2)}
                            className= {size ===2 ? css.selected : ""}>large</div>
                        </div>
                    </div>


                    {/* quantity counter */}
                    <div className={css.quantity}>
                    <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={leftArrow} height={20} alt="hehe" width={20} objectFit = 'contain' onClick={()=>handleQuantity("dec")} />
                            <span>{quantity}</span>

                            <Image src={rightArrow} height={20} width={20} alt="hehe" objectFit = 'contain' onClick={()=>handleQuantity("inc")} />
                            
                        </div>
                    </div>

                    {/* button */}
                    <div className={`btn ${css.btn}`} onClick = {addToCart}>Add to cart</div>
                </div>
                <Toaster />

            </div>


        </Layout>
    )
};
export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type == "pizza" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: "blocking",
    };
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const pizza = await client.fetch(
        `*[_type == "pizza" && slug.current == '${slug}'][0]`
    );

    return {
        props: {
            pizza,
        },
    };
}