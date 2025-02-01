import Link from "next/link";

export default function Nav() {
    return(
        <nav>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'products'}>Products</Link>
                </li>
                <li>
                    <Link href={'/aboutus'}>About Us</Link>
                </li>
            </ul>
        </nav>
    )
}