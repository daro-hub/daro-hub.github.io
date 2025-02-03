"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./_components/Carousel";
import products from "./_public/products.png";
import basil from "./_public/basil1.png";
import cherry from "./_public/cherry.png";
import fresh from "./_public/fresh.png";
import handmade from "./_public/handmade.png";
import sustainability from "./_public/sustainability.png";

export default function Home() {
  const sections = ["home", "products", "carousel"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: currentIndex * window.innerHeight,
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Sezione Home */}
      <div className="home">
        <div>
          <h1>
            Access all the <span>best Italian <br/>
            local products</span> in a Click!
          </h1>
          <p>
            Discover our local artisans products <br/>
            shop <span>fresh</span>, <span>handmade</span>,
            and <span>sustainable</span> today!
          </p>
          <div className="buttons">
            <Link href="/products">
              <button
                className="order"
                style={{ backgroundColor: "#82b22f" }}
              >
                Order now
              </button>
            </Link>
            <Link href="/">
              <button className="explore">Explore more →</button>
            </Link>
          </div>
        </div>
        {/* Sezione Immagine */}
        <div className="circle">
          <Image
            src={products}
            alt="products"
            style={{ maxWidth: "150%", height: "auto" , filter: "drop-shadow(0px 0px 20px black"}}
          />
        </div>
      </div>

      {/* Sezione Carousel */}
      <Carousel />
      
      {/* Sezione why to buy */}
      <div className="wtb">
        <Image className="food" src={cherry} alt="food" style={{top: "2100px", left: "70px", transform:"rotate(37deg)"}}/>
        <Image className="food" src={basil} alt="food" style={{top: "2400px", left: "300px", transform:"rotate(303deg)"}}/>
        <Image className="food" src={cherry} alt="food" style={{top: "2450px", right: "30px", transform:"rotate(0deg)"}}/>
        <Image className="food" src={basil} alt="food" style={{top: "2100px", right: "200px", transform:"rotate(42deg)"}}/>
        <div className="reasons">

          <div className="row" style={{marginLeft: "350px"}}>
            <div className="reason"> 
              <h1>Fresh</h1>
              <p>Experience the unbeatable flavor and quality of fresh, locally sourced products. Our ingredients are harvested at peak ripeness, ensuring vibrant taste and superior nutrition.</p>
            </div>
            <Image src={fresh} alt="fresh"/>
          </div>

          <div className="row" style={{marginLeft: "30vw"}}>
            <Image src={handmade} alt="handmade"/>
            <div className="reason">
              <h1>Handmade</h1>
              <p>Discover the authenticity of handmade products, created with care by skilled artisans. Each item is a labor of love, made using time-honored techniques and the finest natural ingredients.</p>
              
            </div>
          </div>
          
          <div className="row" style={{marginLeft: "25vw"}}>
            <div className="reason">
              <h1>Sustainable</h1>
              <p>Support a greener future with our sustainably produced goods. We prioritize eco-friendly farming, ethical sourcing, and minimal waste to protect our planet.</p>
            </div>
            <Image src={sustainability} alt="sustainability"/>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}
