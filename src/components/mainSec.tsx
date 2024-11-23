'use client'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import Link from "next/link";

export default function MainSec() {

    gsap.registerPlugin(useGSAP)

    useGSAP(() => {
        gsap.to('.opac', { opacity: 1, duration: 3 })
        gsap.to('.mark', { backgroundColor: '#fecaca', duration: 5 })
        gsap.to('.arrow', { marginTop: 174, duration: 1, yoyo: true, repeat: Infinity, ease: "power1" })
    })

    return (
        <section className="pt-32">
            <div className="max-w-[1000px] m-auto">
                <div className="pt-10 text-center opacity-0 opac">
                    <h1 className="text-4xl verbFont">Welcom To The GoBlog...</h1>
                    <p className="capitalize pt-10 verbFont leading-[60px]">This website is mixed with <span className="mark">words</span> and <span className="mark">writings</span>. Writings of all the <span className="mark">mentalities</span> you were looking for; I wish you could be one of those <span className="mark">mindsets</span> on this website , and make us happy with your writing.</p>
                    <div className="pt-3">
                        <Link href='https://github.com/ArshiarshiA' className="border border-gray-200 px-12 py-1 rounded-full transition-all hover:bg-gray-100">
                            By
                        </Link>
                    </div>
                </div>
                <div className="w-fit m-auto mt-36 bg-gray-100 rounded-full p-2 cursor-pointer absolute left-[48%] right-[48%] arrow" onClick={() => {
                    window.scrollTo({
                        top: 800,
                        behavior: "smooth"
                    })
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </div>
        </section>
    )
}