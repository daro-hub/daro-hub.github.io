import Link from 'next/link';
import Personal from './Personal'

export default function Header() {
    return (
        <header>
            <Link href={'/'}>
                <h1>LocalGoods</h1>
            </Link>
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
            <Personal />
        </header>
    )
}