'use client';

import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

const Hero = () => (
    <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
            <div className="flex justify-center items-center flex-col relative z-10">
                <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>METAVERSE</motion.h1>

                <motion.div variants={textVariant(1.2)} className="flex flex-row justify-center items-center">
                    <h1 className={styles.heroHeading}>MA</h1>
                    <div className={styles.heroDText} />
                    <h1 className={styles.heroHeading}>NESS</h1>
                </motion.div>
            </div>

            <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className="relative w-full -mt-[12px] md:-mt-[20px]">
                <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-0 -top-[30px]" />
                
                <img src="/cover.png" alt="cover" className="w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[140px] z-10 relative" />
                
                <a href="#explore">
                    <div className="w-full flex justify-end -mt-[50px] sm:-mt-[70px] pr-[40px] relative z-10">
                        <Image src="/stamp.png" alt="stamp" width={100} height={100} className="sm:w-[155px] sm:h-[155px] object-contain" />
                    </div>
                </a>
            </motion.div>
        </motion.div>
    </section>
);

export default Hero;