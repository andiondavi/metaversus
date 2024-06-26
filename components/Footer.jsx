'use client';

import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";
import styles from "../styles";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <motion.footer variants={footerVariants} initial="hidden" whileInView="show" className={`${styles.paddings} py-8 relative`}>
        <div className="footer-gradient" />

        <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
            <div className="flex items-center justify-between flex-wrap gap-5">
                <h4 className="font-bold text-[44px] md:text-[64px] text-white">Enter the Metaverse</h4>
                <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
                    <Image src="/headset.svg" alt="headset" width={24} height={24} className="object-contain" />
                    <span className="font-normal text-[16px] text-white uppercase">Enter Metaverse</span>
                </button>
            </div>

            <div className="flex flex-col">
                <div className="mb-[50px] h-[2px] bg-white opacity-10" />

                <div className="flex items-center justify-between flex-wrap gap-4">
                    <h4 className="font-extrabold text-[24px] text-white uppercase">Metaversus</h4>
                    <p className="font-normal text-[14px] text-white opacity-50">Copyright &copy; 2024 Metaversus. All rights reserved</p>

                    <div className="flex gap-4">
                        {socials.map((icon) => (
                            <Link key={icon.name} href={icon.href} target="_blank">
                                <Image src={icon.url} alt={icon.name} width={24} height={24} className="object-contain cursor-pointer" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.footer>
);

export default Footer;