'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import beans from '../../_public/(carousel)/beans.png';
import cheese from '../../_public/(carousel)/cheese.jpg';
import honey from '../../_public/(carousel)/honey.jpg';
import pasta from '../../_public/(carousel)/pasta.png';
import wine from '../../_public/(carousel)/wine.jpg';


export default function Carousel() {
    const router = useRouter()

    const items = [
        { id: 1, image: beans, alt: 'Food 1', color: '#7d4a21', name: 'Beans', info: 'Discover the natural richness of locally grown beans, a timeless staple packed with flavor, nutrition, and sustainability. Carefully cultivated by dedicated farmers, our beans offer an authentic taste of tradition while supporting a healthier lifestyle.' },
        { id: 2, image: cheese, alt: 'Food 2', color: '#ffdc19', name: 'Cheese',info: 'Indulge in the authentic flavors of locally crafted cheese, made with passion by skilled artisans using traditional methods. Every bite reflects the dedication to quality, sustainability, and the unique character of our region’s finest ingredients.' },
        { id: 3, image: wine, alt: 'Food 5', color: '#570416', name: 'Wine',info: 'Discover the rich flavors and exquisite aromas of locally produced wine, made with care by dedicated winemakers who respect tradition and sustainability. Every bottle tells a story of the land, the vines, and the artistry behind each sip.' },
        { id: 4, image: pasta, alt: 'Food 4', color: '#fdd76c', name: 'Pasta',info: 'Experience the rich heritage of artisanal pasta, crafted with the finest local ingredients and traditional techniques. Our pasta is more than just a meal—it’s a celebration of flavor, quality, and time-honored craftsmanship.' },
        { id: 5, image: honey, alt: 'Food 3', color: '#df9713', name: 'Honey',info: 'Indulge in the rich, golden goodness of locally sourced honey, crafted with care by passionate beekeepers. Unlike mass-produced alternatives, our honey is 100% pure, free from additives, and packed with natural nutrients.' }
    ]

    const [carouselItems, setCarouselItems] = useState(items);

    const handleNext = () => {
        setCarouselItems((prev) => {
            return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)] // Sposta l'ultimo elemento all'inizio
        })
    }

    const handlePrev = () => {
        setCarouselItems((prev) => {
            return [...prev.slice(1), prev[0]] // Sposta il primo elemento in fondo
        })
    }

    const priorityItem = carouselItems[2];

    return (
        <div className="carousel" style={{background: priorityItem.color }}>
            <h1>Discover our local products!</h1>

            <button onClick={() => router.push('/products')} style={{background: priorityItem.color}}>Shop our {priorityItem.name}</button>

            <div className="carouselInner">

                <button className="prev" onClick={handleNext} style={{background: priorityItem.color }}>←</button>

                {carouselItems.map((item, index) => (
                    <Link key={index} href={"/products"}>
                        <Image src={item.image} alt={item.alt} className={`item ${index === 2 ? "active" : ""}`}/>
                    </Link>
                    
                ))}

                <button className="next" onClick={handlePrev} style={{background: priorityItem.color }}>→</button>
            </div>
            <div className='info'>
                <h1 style={{color: priorityItem.color }}>
                    {priorityItem.name}
                </h1>
                <p>{priorityItem.info}</p>
            </div>
        </div>
    );
};