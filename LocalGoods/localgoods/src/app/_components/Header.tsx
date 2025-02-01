import Personal from './Personal';
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