import Image from "next/image";
import logoImg from '../assets/images/logo.svg'
import menuLogo from '../assets/images/menu.svg'
import Button from "@/components/Buttons";
import Link from "next/link";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
        <section className="my-6">
            <div className="container">
                <div className="border border-white rounded-full grid grid-cols-2 lg:grid-cols-3 py-2 px-6">
                    <div className="flex items-center">
                        <Image src={logoImg} height={100} width={100} alt="logo" />
                    </div>
                    <div className="hidden lg:flex justify-center">
                       <nav className="flex flex-row gap-4 items-center">
                            {navLinks.map(e=><a href={e.href}>{e.label}</a>)}
                        </nav> 
                    </div>
                    <div className=" flex justify-end items-center md:hidden">
                        {/* <Image src={menuLogo} height={10} width={10} alt="logo" /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
                    <div className="hidden md:flex justify-end gap-2">
                        <Button variant="primary">Sign Up</Button>
                        <Button variant="secondary">Sign In</Button>

                    </div>
                </div>
            </div>
        </section>);
}
