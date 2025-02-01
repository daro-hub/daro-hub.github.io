import Image from "next/image"
import products from "./_public/products.png"
import Link from "next/link"
import Carousel from "./_components/Carousel"

export default function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <h1>Access all the <span>best Italian <br/>
          local products</span> in a Click!</h1>

          <p>Discover our local artisans products <br/> 
          shop <span>fresh</span>,<span> handmade</span>, and <span>sustainable</span> today!</p>

          <div className="buttons">
            <Link href={'/products'}>
                <button className="order" style={{backgroundColor: '#82b22f'}}>
                  Order now
                </button>
            </Link>
            <Link href={'/'}>
                <button className="explore">
                  Explore more →
                </button>
            </Link>
          </div>
        </div>
        
        <div className="circle">
          <Image 
            src={products} 
            alt="products" 
            style={{
              maxWidth: '150%',  
              height: 'auto'
            }}
          />
        </div>
      </div>
      <Carousel />
    </div>
  )
}