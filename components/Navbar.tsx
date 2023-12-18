import { NAV_LINKS } from "@/content"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href ='/'>
        <Image src= "/citygrindlogo.png" alt="logo" width={74} height={29}/>
        </Link>
        
            {/* Links */}
            <ul className="hidden h-fill gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="flexCenter">
                        {link.label}
                    </Link>
                ))}
            </ul>
    </nav>
  )
}

export default Navbar