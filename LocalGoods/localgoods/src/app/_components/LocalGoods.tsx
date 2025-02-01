import Image from 'next/image';
import lg from '../_public/lg.png';
import Link from 'next/link';

export default function Header() {
    return (
        <Link href={'/'} style={{
                width: '20%',
            }}>
            <Image
                alt='LocalGoods' 
                src={lg}
                style={{
                    width: '100%',
                    height: 'auto'
                }}
            />
        </Link>
    )
}