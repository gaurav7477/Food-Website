import Image from 'next/image'
import css from "../styles/Hero.module.css"
import Cherry from '../assets/Cherry.png'
import heroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'



export default function Hero() {
    return (
        <div className={css.container}>
            {/* left side */}
            <div className={css.left}>
                <div className={css.cherryDiv}>
                    <span>More than faster</span>
                    <Image src={Cherry} alt="hehe" width={40} height={25} />
                </div>


                <div className={css.heroText}>
                    <span>Be the Fastest</span>
                    <span>In Delivering</span>
                    <span>
                        your <span style={{ color: "var(--themeRed)" }}>Pizza</span>
                    </span>
                </div>

                <span className={css.miniText}>
                    mnis accusamus molestiae suscipit. Ipsum quod corrupti dolorem natus animi tenetur quis, repellendus incidunt.
                </span>

                <button className={`btn ${css.btn}`}> Get started</button>
            </div>





            {/* rigth side */}
            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={heroImage} alt="heh" layout='intrinsic' />
                </div>

                <div className={css.contactUs}>
                    <span>Contact Us</span>
                    <div>
                        <UilPhone color='white'></UilPhone>
                    </div>
                </div>

                <div className={css.pizza}>
                    <div>
                        <Image src={Pizza1} alt = "hehe" objectFit='cover' layout='intrinsic' />
                    </div>

                    <div className={css.details}>
                        <span>Italian Pizza</span>
                        <span>
                        <span style={{color:"var(--themeRed)"}}>$</span> <span> 56</span>
                        </span>
                    </div>
                </div>


            </div>
        </div>
    )
};
