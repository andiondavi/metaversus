'use client';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import styles from "../styles";
import Image from "next/image";

const Feedback = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}>
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 p-4 sm:p-8 rounded-[32px] border border-[#6A6A6A] relative">
                <div className="feedback-gradient" />

                <div>
                    <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-white">Samantha</h4>
                    <p className="mt-[8px] font-normal text-[12px] sm:text-[18px] leading-[16px] sm:leading-[22px] text-white">Founder | Metaversus</p>
                </div>

                <p className="mt-[24px] font-normal text-[18px] sm:text-[24px] leading-[39px] sm:leading-[45px] text-white">
                    “With the development of today's technology, metaverse is very useful for today's work, or can be called web 3.0. by using metaverse you can use it as anything”
                </p>
            </motion.div>

            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className="relative flex-1 flex justify-center items-center">
                <img src="/planet-09.png" alt="rocket and planet" className="w-full h-auto min-h-[210px] lg:h-[610px] object-cover rounded-[40px]" />

                <motion.div variants={zoomIn(0.4, 1)} className="hidden lg:block absolute -left-[10%] top-[3%]">
                    <Image src="/stamp.png" alt="stamp" width={155} height={155} className="object-contain" />
                </motion.div>
            </motion.div>
        </motion.div>
    </section>
);

export default Feedback;