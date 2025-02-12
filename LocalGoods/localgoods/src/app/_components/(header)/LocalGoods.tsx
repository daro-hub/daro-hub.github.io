import Image from 'next/image';
import lg from '../../_public/lg.png';
import Link from 'next/link';

export default function LocalGoods() {
    return (
        <Link href={'/'}>
            <Image
                alt='LocalGoods' 
                src={lg}
                style={{
                    width: '30vh',
                    height: 'auto',
                    marginRight: '8vh',
                }}
            />
        </Link>
    )
}