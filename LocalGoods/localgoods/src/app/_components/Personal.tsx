import Image from 'next/image';
import Link from 'next/link';
import heart from '../_public/heart.png';
import cart from '../_public/cart.png';
import user from '../_public/user.png';

export default function Personal() {
    return (
        <div className="personal">
            <Link href={'/favorite'}>
                <button>
                    <Image 
                        alt='Liked products' 
                        src={heart}
                        style={{
                            maxWidth: '100%', 
                            height: 'auto'
                        }}
                    />
                </button>
            </Link>
            <Link href={'/cart'}>
                <button>
                    <Image 
                        alt='Your cart' 
                        src={cart}
                        style={{
                            maxWidth: '100%', 
                            height: 'auto'
                        }}
                    />
                </button>
            </Link>
            <Link href={'/profile'}>
                <button>
                    <Image 
                        alt='Profile info' 
                        src={user}
                        style={{
                            maxWidth: '100%',  
                            height: 'auto',
                        }}
                    />
                </button>
            </Link>
        </div>
    )
}