"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname();
    return(
        <nav>
            <ul>
                <li>
                    <Link href={'/'} className={pathname === '/' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <Link href={'products'} className={pathname === '/products' ? 'active' : ''}>Products</Link>
                </li>
                <li>
                    <Link href={'/aboutus'} className={pathname === '/aboutus' ? 'active' : ''}>About Us</Link>
                </li>
            </ul>
        </nav>
    )
}