'use client';

import { useState } from "react";
import { exploreWorlds } from "../constants";
import { motion } from "framer-motion";
import { TypingText, ExploreCard, TitleText } from "../components";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";

const Explore = () => {
    const [active, setActive] = useState('world-2')

    return (
        <section id="explore" className={`${styles.paddings}`}>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} className={`${styles.innerWidth} mx-auto flex flex-col`}>
                <TypingText title="| The World" textStyles="text-center" />

                <TitleText title={<>Choose the world you want<br className="hidden md:block"/> to explore</>} textStyles="text-center" />

                <div className="mt-[50px] flex flex-col lg:flex-row min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Explore;