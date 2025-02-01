import Link from 'next/link';
import Personal from './Personal';
import Image from 'next/image';
import LocalGoods from './LocalGoods';
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <LocalGoods />
            <Nav />
            <Personal />
        </header>
    )
}