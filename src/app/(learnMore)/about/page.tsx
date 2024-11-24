import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Poster from '../../../../public/storyYetB.svg'

export default function About() {
    return (
        <section className="border-y my-5">
            <div className="max-w-[1000px] m-auto py-3 flex justify-between items-center">
                <div className="w-1/2">
                    <h1 className="text-4xl">ARSHIA MANSURY</h1>
                    <p className="text-xl text-gray-400">Front-end Developer</p>
                    <p className="py-6 text-xl text-justify">I am a curious Front-end developer
                        with 1.5 experience. I always try to
                        learn and experience new things and
                        this is very valuable to me. My goal is
                        to effectively use the experiences and
                        skills I have learned in front of my
                        responsibilities
                    </p>
                    <div className="flex gap-2">
                        <Link href={'https://www.linkedin.com/in/arshia-mansury-3439ba320/'}>
                            <FaLinkedin className="duration-200 delay-75 hover:text-blue-500" size={30} />
                        </Link>
                        <Link href={'https://github.com/ArshiarshiA'}>
                            <FaGithub size={30} />
                        </Link>
                    </div>
                </div>
                <div className="w-1/2">
                    <Image src={Poster} alt="poster" />
                </div>
            </div>
        </section>
    )
}