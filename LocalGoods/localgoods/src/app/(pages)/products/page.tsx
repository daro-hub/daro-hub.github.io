import Image from "next/image"

import search from '../../_public/search.png'

import beans from '../../_public/(carousel)/beans.png';
import cheese from '../../_public/(carousel)/cheese.jpg';
import honey from '../../_public/(carousel)/honey.jpg';
import pasta from '../../_public/(carousel)/pasta.png';
import wine from '../../_public/(carousel)/wine.jpg';

export default function Products() {
    const items = [
        { id: 1, image: beans, alt: 'Food 1', color: '#7d4a21', name: 'Beans', info: 'Discover the natural richness of locally grown beans, a timeless staple packed with flavor, nutrition, and sustainability. Carefully cultivated by dedicated farmers, our beans offer an authentic taste of tradition while supporting a healthier lifestyle.' },
        { id: 2, image: cheese, alt: 'Food 2', color: '#ffdc19', name: 'Cheese',info: 'Indulge in the authentic flavors of locally crafted cheese, made with passion by skilled artisans using traditional methods. Every bite reflects the dedication to quality, sustainability, and the unique character of our region’s finest ingredients.' },
        { id: 3, image: wine, alt: 'Food 5', color: '#570416', name: 'Wine',info: 'Discover the rich flavors and exquisite aromas of locally produced wine, made with care by dedicated winemakers who respect tradition and sustainability. Every bottle tells a story of the land, the vines, and the artistry behind each sip.' },
        { id: 4, image: pasta, alt: 'Food 4', color: '#fdd76c', name: 'Pasta',info: 'Experience the rich heritage of artisanal pasta, crafted with the finest local ingredients and traditional techniques. Our pasta is more than just a meal—it’s a celebration of flavor, quality, and time-honored craftsmanship.' },
        { id: 5, image: honey, alt: 'Food 3', color: '#df9713', name: 'Honey',info: 'Indulge in the rich, golden goodness of locally sourced honey, crafted with care by passionate beekeepers. Unlike mass-produced alternatives, our honey is 100% pure, free from additives, and packed with natural nutrients.' }
    ]

    return (
        <div className="products">

            {/* Sezione Search */}
            <div className="search">
                <div className="bar">
                    <input type="text" placeholder="Search products"/>
                    <button>
                        <Image 
                            alt='search' 
                            src={search}
                        />
                    </button>
                </div>
                <button>Filter</button>
            </div>

            {/* Sezione Categories */}
            <div className="categories">
                <h1>Popular categories</h1>
                {items.map((item) => (
                    <button key={item.id}>
                        <Image src={item.image} alt={item.alt} className={`${item.id}`} style={{width: '100px', height: '100px'}}/>
                    </button>
                    
                ))}
            </div>

            {/* Sezione Products */}   
            <div className="productList">
                
            </div>
        </div>
    )
}