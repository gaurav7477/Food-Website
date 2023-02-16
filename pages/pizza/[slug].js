import Layout from '../../componants/Layout'
import { client, urlFor } from "../../lib/client"
import css from '../../styles/pizza.module.css'
import Image from 'next/image';
import leftArrow  from '../../assets/arrowLeft.png'
import rightArrow from '../../assets/arrowRight.png'

export default function pizza({ pizza }) {
    // console.log(pizza)
    const src = urlFor(pizza.image).url();
    return (

        <Layout>

            <div className={css.container}>
                {/* left side */}
                <div className={css.ImageWrapper}>
                    <Image
                        loader={() => src}
                        src={src} alt=" " objectFit="cover" unoptimized layout="fill" />
                </div>

                {/* right side */}

                <div className={css.right}>
                    <span>{pizza.name}</span>
                    <span>{pizza.details} </span>
                    <div className={css.size}>
                        <span>size</span>
                        <div className={css.sizeVariants}>
                            <div>small</div>
                            <div>medium</div>
                            <div>large</div>
                        </div>
                    </div>


                    {/* quantity counter */}
                    <div className={css.quantity}>
                        <span>Quantity</span>
                        <div className={css.counter}>
                            <Image src={leftArrow} height={20} width={20} objectFit = 'contain' />
                            <span>1</span>

                            <Image src={rightArrow} height={20} width={20} objectFit = 'contain' />
                            
                        </div>
                    </div>
                </div>

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