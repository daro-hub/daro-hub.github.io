"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./_components/Carousel";
import products from "./_public/products.png";

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
    <div>
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
        <h1>Why to buy from us?</h1>
        <div className="reasons">

          <div className="reason">
            <h1>Handmade</h1>
            <p>Discover the authenticity of handmade products, created with care by skilled artisans. Each item is a labor of love, made using time-honored techniques and the finest natural ingredients. When you buy handmade, you’re not just getting a product—you’re experiencing craftsmanship, tradition, and dedication in every detail.</p>
          </div>

          <div className="reason">
            <h1>Fresh</h1>
            <p>Experience the unbeatable flavor and quality of fresh, locally sourced products. Our ingredients are harvested at peak ripeness, ensuring vibrant taste, superior nutrition, and a farm-to-table experience like no other. Say goodbye to preservatives and artificial additives—choose freshness, choose quality!</p>
          </div>

          <div className="reason">
            <h1>Sustainable</h1>
            <p>Support a greener future with our sustainably produced goods. We prioritize eco-friendly farming, ethical sourcing, and minimal waste to protect our planet while delivering top-quality products. Every purchase supports responsible practices that benefit both you and the environment. Choose sustainability—because small choices make a big impact!</p>
          </div>

          <div className="reason">
            <h1>Accessibility</h1>
            <p>We believe that high-quality products should be accessible to all. That’s why we offer premium goods at fair prices, making it easy for everyone to enjoy the best in taste, health, and sustainability. No compromises, just great products for every home and every lifestyle. Because quality should have no limits!</p>
          </div>

        </div>
      </div>
    </div>
  );
}
