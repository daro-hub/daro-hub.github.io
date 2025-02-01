import Image from 'next/image';
import lg from '../_public/lg.png';
import Link from 'next/link';

export default function Header() {
    return (
        <Link href={'/'}>
            <Image
                alt='LocalGoods' 
                src={lg}
                style={{
                    maxWidth: '30%', 
                    height: 'auto'
                }}
            />
        </Link>
    )
}