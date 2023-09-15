import Link from "next/link"
import Image from "next/image"
import Logo from "./brand-logo.svg"

export default function Navbar() {
  return (
    <nav>
        <Image src={Logo} alt="Hepldesk Logo" width={30} quality={100} />
        <Link href="/" >Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/tickets/create">Create Tickets</Link>
    </nav>
  )
}
