import Image from "next/image"

import basil from "../../_public/(decorations)/basil.png"
import cherry from "../../_public/(decorations)/cherry.png"
import fresh from "../../_public/(wtb)/fresh.png"
import handmade from "../../_public/(wtb)/handmade.png"
import sustainability from "../../_public/(wtb)/sustainability.png"

export default function Wtb() {
  return (
    <div className="wtb">
      <Image
        className="food"
        src={cherry}
        alt="food"
        style={{ top: "213vh", left: "4vw", transform: "rotate(37deg)" }}
      />
      <Image
        className="food"
        src={basil}
        alt="food"
        style={{ top: "245vh", left: "13vw", transform: "rotate(303deg)" }}
      />
      <Image
        className="food"
        src={cherry}
        alt="food"
        style={{ top: "250vh", right: "1vw", transform: "rotate(0deg)" }}
      />
      <Image
        className="food"
        src={basil}
        alt="food"
        style={{ top: "210vh", right: "11vw", transform: "rotate(12deg)" }}
      />
      <div className="reasons">
        <div className="row" style={{ marginLeft: "18vw" }}>
          <div className="reason">
            <h1>Fresh</h1>
            <p>
              Experience the unbeatable flavor and quality of fresh, locally
              sourced products. Our ingredients are harvested at peak ripeness,
              ensuring vibrant taste and superior nutrition.
            </p>
          </div>
          <Image src={fresh} alt="fresh" />
        </div>

        <div className="row" style={{ marginLeft: "25vw" }}>
          <Image src={handmade} alt="handmade" />
          <div className="reason">
            <h1>Handmade</h1>
            <p>
              Discover the authenticity of handmade products, created with care
              by skilled artisans. Each item is a labor of love, made using
              time-honored techniques and the finest natural ingredients.
            </p>
          </div>
        </div>

        <div className="row" style={{ marginLeft: "22vw" }}>
          <div className="reason">
            <h1>Sustainable</h1>
            <p>
              Support a greener future with our sustainably produced goods. We
              prioritize eco-friendly farming, ethical sourcing, and minimal
              waste to protect our planet.
            </p>
          </div>
          <Image src={sustainability} alt="sustainability" />
        </div>
      </div>
    </div>
  );
}
