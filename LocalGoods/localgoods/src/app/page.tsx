"use client";

import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import Wtb from "./_components/(home)/Wtb"

import Carousel from "./_components/(home)/Carousel"
import products from "./_public/(decorations)/products.png"

export default function Home() {
  const sections = ["home", "carousel", "wtb"]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1))
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [])

  useEffect(() => {
    window.scrollTo({
      top: currentIndex * window.innerHeight,
      behavior: "smooth",
    })
  }, [currentIndex])

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
              <button className="explore" onClick={() => setCurrentIndex(1)}>Explore more →</button>
            </Link>
          </div>
        </div>
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
      <Wtb />
    </div>
  );
}
