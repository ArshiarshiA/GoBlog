import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/mainLogo.png'
import { FaRegCopyright } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CheckIsLogin from "../checkIsLogin";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="max-w-[1200px] m-auto py-10">
                <div className="flex flex-col min-[780px]:flex-row gap-10">
                    <div className="px-3 w-full min-[780px]:w-4/12">
                        <h1 className="font-bold text-4xl w-fit">Get in Touch</h1>
                        <p className="py-4">Somewhere Around Here</p>
                        <a href="tel:09154748708" className="font-extralight">+989154748708</a>
                        <p className="font-extralight">marshia370@gmail.com</p>
                    </div>
                    <div className="px-3 w-full min-[780px]:w-4/12">
                        <h1 className="text-2xl border-b border-b-red-300 w-fit">Learn more</h1>
                        <div className="pt-2 flex flex-col">
                            <Link className="font-extralight pt-2" href={'/about'}>About</Link>
                            <Link className="font-extralight pt-2" href={'/contact'}>Contact</Link>
                            <Link className="font-extralight pt-2" href={'/terms'}>Term of Service</Link>
                            <Link className="font-extralight pt-2" href={'/privacy'}>Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="px-3 w-full min-[780px]:w-4/12">
                        <h1 className="text-2xl border-b border-b-red-300 w-fit">Quick Links</h1>
                        <div className="pt-2 flex flex-col">
                            <CheckIsLogin link="/addBlog">
                                <p className="font-extralight pt-2">Create a Blog</p>
                            </CheckIsLogin>
                            <CheckIsLogin link="/explore">
                                <p className="font-extralight pt-2">Explore</p>
                            </CheckIsLogin>
                            <Link className="font-extralight pt-2" href={'/faq'}>Faq</Link>
                        </div>
                    </div>
                </div>
                <div className="pt-10 min-[620px]:pt-24 flex flex-col min-[620px]:flex-row min-[620px]:justify-between gap-10 justify-center">
                    <div className=" w-full min-[620px]:w-4/12">
                        <Link href='/'>
                            <Image className="max-[620px]:m-auto" src={Logo} width={200} alt="logo" />
                        </Link>
                    </div>
                    <div className="text-center w-full min-[620px]:w-4/12">
                        <p className="flex items-center justify-center"><FaRegCopyright /> 2024 all right reserved</p>
                        <p className="flex items-center justify-center">created with <IoMdHeart className="text-red-500" /> By <Link className="pl-1 underline" href={'https://github.com/ArshiarshiA'}>Me</Link></p>
                    </div>
                    <div className="flex max-[620px]:justify-center gap-5 w-full min-[620px]:w-4/12">
                        <Link href={'/'}>
                            <FaInstagram size={25} className="cursor-pointer" />
                        </Link>
                        <Link href={'/'}>
                            <FaTelegramPlane size={25} className="cursor-pointer" />
                        </Link>
                        <Link href={'/'}>
                            <FaXTwitter size={25} className="cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}